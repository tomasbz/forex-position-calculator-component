var Storage =
{
    properties: {
        accountSize: '',
        riskInPercent: '',
        riskInCurrency: '',
        riskInPips: '',
        tickValue: '',
        lotSize: ''
    },

    /**
     * Load properties from client local storage
     * @returns {Storage.properties|{accountSize, riskInPercent, riskInCurrency, riskInPips, tickValue, lotSize}}
     */
    load: function()
    {
        var propertiesKeys = Object.keys(this.properties);
        for(var i = 0; i < propertiesKeys.length; i++)
        {
            this.properties[propertiesKeys[i]] = localStorage.getItem(propertiesKeys[i]);
        }

        return this.properties;
    },

    /**
     * Save properties to client local storage
     * @param properties
     */
    save: function(properties)
    {
        var propertiesKeys = Object.keys(this.properties);
        for(var i = 0; i < propertiesKeys.length; i++)
        {
            localStorage.setItem(propertiesKeys[i], properties[propertiesKeys[i]]);
            this.properties[propertiesKeys[i]] = properties[propertiesKeys[i]];
        }

    }
}