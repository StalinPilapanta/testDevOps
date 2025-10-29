terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
}

resource "azurerm_resource_group" "rg_ejemplo_devops" {
  name     = "rg-devops-microservicio"
  location = "East US" 
  
  tags = {
    Environment = "DevOps"
    Project     = "Microservice"
  }
}
output "resource_group_name" {
  value       = azurerm_resource_group.rg_ejemplo_devops.name
  description = "El nombre del Resource Group creado."
}

output "resource_group_location" {
  value       = azurerm_resource_group.rg_ejemplo_devops.location
  description = "La ubicación del Resource Group."
}