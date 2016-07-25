var Calculator =
{
    decimals: 2,

    /**
     * Get risk in curency
     *
     * @param riskInPercent
     * @param accountBallance
     * @returns {string}
     */
    getRiskInCurrency: function(riskInPercent, accountBallance)
    {
        var riskInCurrency = (accountBallance * riskInPercent / 100).toFixed(this.decimals);
        return (riskInCurrency == 'NaN' ? '': riskInCurrency);
    },

    /**
     * Get lot size
     *
     * @param riskInCurrency
     * @param riskInPips
     * @param tickValue
     * @returns {string}
     */
    getLotSize: function(riskInCurrency, riskInPips, tickValue)
    {
        var lotSize = (riskInCurrency / riskInPips / tickValue / 10).toFixed(this.decimals);
        return (lotSize == 'NaN' ? '': lotSize);
    }
}