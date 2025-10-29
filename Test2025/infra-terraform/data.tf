locals {
  prefix     = "devops-aks"
  location   = "East US"
  rg_name    = "rg-devops-microservicio"
  node_count = 2
}

data "azurerm_resource_group" "rg_devops" {
  name = local.rg_name
  depends_on = [ azurerm_resource_group.rg_ejemplo_devops ]
}