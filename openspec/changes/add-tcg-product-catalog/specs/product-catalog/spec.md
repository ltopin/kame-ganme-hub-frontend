## Purpose

Lets a customer browse the TCG products Kame Game currently offers and reach the owner on WhatsApp about a specific one, without any online checkout or inventory system.

## ADDED Requirements

### Requirement: Browse the product catalog
The system SHALL display every available product in a single flat list on the catalog page, with no category grouping or filtering. Each entry in the list SHALL show the product's photo, name, and final sale price.

#### Scenario: Customer opens the catalog page
- **WHEN** a customer navigates to the catalog page
- **THEN** the system displays every available product with its photo, name, and price

### Requirement: View an individual product page
Each product SHALL have its own dedicated, directly-navigable URL showing that product's full details (photo, name, price, description), independent of the catalog list page.

#### Scenario: Customer opens a product's direct link
- **WHEN** a customer navigates directly to a single product's URL (e.g. shared via WhatsApp or Instagram)
- **THEN** the system displays that product's photo, name, price, and description without requiring navigation through the catalog list

### Requirement: Contact the owner about a product via WhatsApp
Every product (in the catalog list and on its individual page) SHALL provide a call-to-action that opens WhatsApp with a message pre-filled to name that specific product.

#### Scenario: Customer requests a product
- **WHEN** a customer selects the "Quero esse" action on a product
- **THEN** the system opens a WhatsApp conversation with the owner's number, with the message pre-filled to reference that product's name

### Requirement: No stock or inventory display
Because the business holds no inventory and sources each product only after a customer request, the system SHALL NOT display or imply any stock level, quantity, or availability count for a product.

#### Scenario: Customer views any product
- **WHEN** a customer views a product in the list or on its individual page
- **THEN** the system shows no stock quantity, "in stock" count, or inventory status of any kind
