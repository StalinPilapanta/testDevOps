resource "azurerm_container_registry" "acr_devops" {

  name                = "acrmicroservicio952024"
  resource_group_name = data.azurerm_resource_group.rg_devops.name
  location            = data.azurerm_resource_group.rg_devops.location
  
  sku                 = "Standard"
  admin_enabled       = true 

  tags = {
    Environment = "DevOps"
    Purpose     = "DockerRegistry"
  }
  depends_on = [ azurerm_resource_group.rg_ejemplo_devops ]
}

output "acr_login_server" {
  value       = azurerm_container_registry.acr_devops.login_server
  description = "El nombre del servidor para iniciar sesión en el ACR."
}