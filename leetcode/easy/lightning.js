/*
 * LightningChartJS example for several AxisXY
 */

// Import LightningChartJS
const lcjs = require('@arction/lcjs')
// Import Random Generator 
const { createProgressiveRandomGenerator } = require('@arction/xydata')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    SolidFill,
    SolidLine,
    ColorRGBA,
       AxisTickStrategies,
    Themes,
} = lcjs

const ls = lightningChart()

const chart = ls.ChartXY({
    theme: Themes.lightNew,
})
    .setTitle('Several Axis')
const groupedBarsValues = {
    groupNames: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
    productNames: ['Product 1', 'Product 2', 'Product 3'],
    values: [
        // Quarter 1: product sales.
        [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1],
         [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1], [1, 2, 1],
        // Quarter 2: product sales.
        [2, 3, 1],
        // Quarter 3: product sales.
        [5, 1, 9],
        // Quarter 4: product sales.
        [7, 5, 1],
    ]
}
const quartersCount = groupedBarsValues.groupNames.length
const productsCount = groupedBarsValues.productNames.length
// Cache colors used in the example
const blueFill = new SolidFill( { color: ColorRGBA(0, 0, 255) } )
const greenFill = new SolidFill( { color: ColorRGBA(0, 255, 0) } )
const redFill = new SolidFill( { color: ColorRGBA( 255, 0, 0,0) } )

// Cache StrokeStyles used in the example
const blueLine = new SolidLine( { fillStyle: blueFill } )
const greenLine = new SolidLine( { fillStyle: greenFill } )
const redLine = new SolidLine( {fillStyle: redFill } )

// First Axes (default)
const axisX1 = chart.getDefaultAxisX()
    // Set title of Axis
    .setTitle('Axis X1').setTickStrategy(AxisTickStrategies.Empty)
    // Set interval of X axis 
    .setInterval(-10, 1300, false, true)
    .setStrokeStyle( blueLine )

const axisY1 = chart.getDefaultAxisY()
    // Set title of Axis
    .setTitle('Axis Y1').setTickStrategy(AxisTickStrategies.Empty)
    // Set interval of Y axis 
    .setInterval(-150, 100, false, true)
    .setStrokeStyle( blueLine )

// Second Axes  (extra)
const axisX2 = chart.addAxisX({
    opposite: true
})
    .setTitle('Axis X2').setTickStrategy(AxisTickStrategies.Empty)
    .setInterval(-60, 500, false, true)
    .setStrokeStyle( greenLine )

const axisY2 = chart.addAxisY({
    opposite: true
})
    .setTitle('Axis Y2')
    .setInterval(-20, 200, false, true).setTickStrategy(AxisTickStrategies.Empty)
    .setStrokeStyle( greenLine )
const allProductsSeries = groupedBarsValues.productNames.map((productName, iProduct) => {
    const series = chart.addRectangleSeries({
    xAxis: axisX2,
    yAxis: axisY2
})
        .setName(productName)
        .setCursorResultTableFormatter((builder, _, figure) => builder
            .addRow(`${productName} sales`)
            .addRow(`${figure.getDimensionsTwoPoints().y2} €`)
        )
    return series
})

const barWidthX = 10.0
const groupsGapX = 10.0
const edgesMarginX = 1.0

// Add Rectangle figures for each Quarter and for each product.
groupedBarsValues.values.forEach((quarterValues, iQuarter) => {
    quarterValues.forEach((quarterValue, iProduct) => {
        const productSeries = allProductsSeries[iProduct]
        const x1 = iQuarter * (productsCount * barWidthX + groupsGapX) + iProduct * barWidthX
        const x2 = x1 + barWidthX
        // NOTE: Logarithmic data range is not defined at 0.
        const y1 = -20
        const y2 = quarterValue*5
        productSeries.add({
            x1,
            x2,
            y1,
            y2
        })
    })
})

// Create series with explicit axes.
// Axes 1
const splineSeries1 = chart.addSplineSeries({
    xAxis: axisX1,
    yAxis: axisY1
})
    .setStrokeStyle( redLine )
    .setPointFillStyle( blueFill )
    .setName('Axis 1')

// Axes 2
const splineSeries2 = chart.addSplineSeries({
    xAxis: axisX1,
    yAxis: axisY1
})
    .setStrokeStyle( greenLine )
    .setName('Axis 2')

// Function to add random values to given series with createProgressiveRandomGenerator
const setSeries = (amountOfDots, splineSeries) => {
    createProgressiveRandomGenerator()
        .setNumberOfPoints(amountOfDots)
        .generate()
        // Set stream to output X points at a time
        .setStreamBatchSize(amountOfDots)
        // Create a new stream with previously defined stream settings
        .toStream()
        .forEach((point, i) => {
            point.x = point.x * 5, // define X coordinates for point  
                point.y = (20 * Math.sin(i / (10 * Math.PI)) + (Math.floor(Math.random() * 20))) // define Y coordinates for point  
            splineSeries.add(point) // add to series
        })

}

// set Series 1
setSeries(250, splineSeries1)

// set Series 2
setSeries(70, splineSeries2)
