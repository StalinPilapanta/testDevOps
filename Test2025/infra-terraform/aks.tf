resource "azurerm_virtual_network" "vnet_aks" {
  name                = "${local.prefix}-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = data.azurerm_resource_group.rg_devops.location
  resource_group_name = data.azurerm_resource_group.rg_devops.name
}

resource "azurerm_subnet" "subnet_aks" {
  name                 = "${local.prefix}-subnet"
  resource_group_name  = data.azurerm_resource_group.rg_devops.name
  virtual_network_name = azurerm_virtual_network.vnet_aks.name
  address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_kubernetes_cluster" "aks_cluster" {
  name                = "${local.prefix}-cluster"
  location            = data.azurerm_resource_group.rg_devops.location
  resource_group_name = data.azurerm_resource_group.rg_devops.name
  dns_prefix          = local.prefix

  identity {
    type = "SystemAssigned"
  }

  default_node_pool {
    name                 = "nodepool"
    node_count           = local.node_count
    vm_size              = "standard_a2_v2"
    vnet_subnet_id       = azurerm_subnet.subnet_aks.id
    os_disk_size_gb      = 30
    enable_auto_scaling  = true
    min_count            = 1
    max_count            = 2
  }

  kubernetes_version = "1.32.7"
  network_profile {
    network_plugin     = "azure"
    service_cidr       = "10.10.0.0/16"
    dns_service_ip     = "10.10.0.10"
    docker_bridge_cidr = "172.17.0.1/16"
  }

  tags = {
    Environment = "DevOps"
    Project     = "Microservice"
  }
}

output "kube_config" {
  
  value     = azurerm_kubernetes_cluster.aks_cluster.kube_config_raw
  sensitive = true
}