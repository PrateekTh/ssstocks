import chartPropsTypes from "@/types/chartProps"

export const chartColors = [
    "#62BBC1",
    "#F78154",
    "#F2C14E",
    "#4E598C",
    "#B4436C",
]

export const renderDetails = [
    "Symbol",
    "AssetType",
    "Name",
    // "Description",
    "CIK",
    "Exchange",
    "Currency",
    "Country",
    // "Sector",
    // "Industry",
    // "Address",
    "OfficialSite",
    "FiscalYearEnd",
    "LatestQuarter",
    "MarketCapitalization",
    "EBITDA",
    "PERatio",
    "PEGRatio",
    "BookValue",
    "DividendPerShare",
    "DividendYield",
    "EPS",
    "RevenuePerShareTTM",
    "ProfitMargin",
    "OperatingMarginTTM",
    "ReturnOnAssetsTTM",
    "ReturnOnEquityTTM",
    "RevenueTTM",
    "GrossProfitTTM",
    "DilutedEPSTTM",
    // "QuarterlyEarningsGrowthYOY",
    // "QuarterlyRevenueGrowthYOY",
    "AnalystTargetPrice",
    "AnalystRatingStrongBuy",
    "AnalystRatingBuy",
    "AnalystRatingHold",
    "AnalystRatingSell",
    // "AnalystRatingStrongSell",
    "TrailingPE",
    "ForwardPE",
    // "PriceToSalesRatioTTM",
    "PriceToBookRatio",
    "EVToRevenue",
    "EVToEBITDA",
    "Beta",
    "52WeekHigh",
    "52WeekLow",
    "50DayMovingAverage",
    "200DayMovingAverage",
    "SharesOutstanding",
    "DividendDate",
    "ExDividendDate"
]

export const chartProps : chartPropsTypes = {
    marketCap:[
        "MarketCapitalization",
    ],
    //key metrics
    key:[
        "PERatio",
        "PEGRatio",
        "BookValue",
        "DividendPerShare",
        "EPS",
    ],

    maxRatios:[
        "TrailingPE",
        "ForwardPE",
        "PriceToBookRatio",
        "EVToRevenue",
        "EVToEBITDA",
        "DilutedEPSTTM",
        "PriceToSalesRatioTTM",
    ],

    minRatios:[
        "ProfitMargin",
        "Beta",
        "OperatingMarginTTM",
        "ReturnOnAssetsTTM",
        "ReturnOnEquityTTM",
        "DividendYield",
        "QuarterlyEarningsGrowthYOY",
        "QuarterlyRevenueGrowthYOY",
    ],

    // analyst ratings
    analystRatings:[
        "AnalystRatingStrongBuy",
        "AnalystRatingBuy",
        "AnalystRatingHold",
        "AnalystRatingSell",
        "AnalystRatingStrongSell",
    ],



    gross:[
        "RevenueTTM",
        "GrossProfitTTM",
        "EBITDA",
        "SharesOutstanding",
    ],

    other:[
        "AnalystTargetPrice",
        "52WeekHigh",
        "52WeekLow",
        "50DayMovingAverage",
        "200DayMovingAverage",
        "RevenuePerShareTTM",
    ]
}