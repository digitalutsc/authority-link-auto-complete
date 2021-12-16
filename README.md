# Authority Link Autocomplete
Module that adds autocomplete to Authority Link creation. 

## Setup and Usage
### Requirements
- jQuery UI Autocomplete
- Controlled Access Terms
- Linked Data Field

### Configuration
1. Add and configure endpoints using Linked Data Lookup Endpoint entities (under Structure > Linked Data Lookup Endpoint).
2. Note machine names of endpoints to use for autocomplete.
3. Create and/or navigate to the "manage field" page of an Authority Link field.
4. Set key(s) of the Authority Sources to match machine names of endpoints for Linked Data Lookup Endpoint. 

### Usage
1. Add or modify data in an Authority Link field. 
1. Select the “source” to receive autocomplete values from. For autocomplete to work, key of the source must have a corresponding endpoint with Linked Data Lookup Endpoint.
2. Start typing in the field labelled "Alternate link text". A list of autocomplete suggestions should appear. 
3. Select an autocomplete suggestion and the URL will automatically fill in. Note that the autocomplete URL will replace whatever is in the URL field.
