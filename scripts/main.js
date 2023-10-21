Highcharts.chart('container', {
    chart: {
        type: 'tilemap',
        inverted: true,
        height: '80%'
    },

    accessibility: {
        description: 'A tile map represents the states of the USA by violent crime rate according to the UCR',
        screenReaderSection: {
            beforeChartFormat:
                '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        },
        point: {
            valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
        }
    },

    title: {
        text: 'U.S. states by Violent Crime Rate according to the 2022 Universal Crime Report',
        style: {
            fontSize: '1em'
        }
    },

    subtitle: {
        text: 'Source:<a href="https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/explorer/crime/crime-trend">FBI Crime Data Explorer</a>'
    },

    xAxis: {
        visible: false
    },

    yAxis: {
        visible: false
    },

    colorAxis: {
        dataClasses: [{
            from: 0,
            to: 200,
            color: '#F5D63C',
            name: '< 200'
        }, {
            from: 200,
            to: 400,
            color: '#F5A602',
            name: '200 - 400'
        },{
            from: 400,
            to: 600,
            color: '#F57E00',
            name: '400 - 600'
        }, {
            from: 600,
            to: 800,
            color: '#F54F00',
            name: '600 -800'
        }, {
            from: 800,
            color: '#F41400',
            name: '> 800'
        }]
    },

    tooltip: {
        headerFormat: '',
        pointFormat: 'The violent crime rate of <b> {point.name}</b> is <b>{point.value}</b>'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.hc-a2}',
                color: '#000000',
                style: {
                    textOutline: false
                }
            }
        }
    },

    series: [{
        name: '',
        data: [{
            'hc-a2': 'AL',
            name: 'Alabama',
            region: 'South',
            x: 6,
            y: 7,
            value: 409.1
        }, {
            'hc-a2': 'AK',
            name: 'Alaska',
            region: 'West',
            x: 0,
            y: 0,
            value: 758.9
        }, {
            'hc-a2': 'AZ',
            name: 'Arizona',
            region: 'West',
            x: 5,
            y: 3,
            value: 431.5
        }, {
            'hc-a2': 'AR',
            name: 'Arkansas',
            region: 'South',
            x: 5,
            y: 6,
            value: 645.3
        }, {
            'hc-a2': 'CA',
            name: 'California',
            region: 'West',
            x: 5,
            y: 2,
            value: 499.5
        }, {
            'hc-a2': 'CO',
            name: 'Colorado',
            region: 'West',
            x: 4,
            y: 3,
            value: 492.5
        }, {
            'hc-a2': 'CT',
            name: 'Connecticut',
            region: 'Northeast',
            x: 3,
            y: 11,
            value: 150
        }, {
            'hc-a2': 'DE',
            name: 'Delaware',
            region: 'South',
            x: 4,
            y: 9,
            value: 383.5
        }, {
            'hc-a2': 'DC',
            name: 'District of Columbia',
            region: 'South',
            x: 4,
            y: 10,
            value: 812.3
        }, {
            'hc-a2': 'FL',
            name: 'Florida',
            region: 'South',
            x: 8,
            y: 8,
            value: 258.9
        }, {
            'hc-a2': 'GA',
            name: 'Georgia',
            region: 'South',
            x: 7,
            y: 8,
            value: 367
        }, {
            'hc-a2': 'HI',
            name: 'Hawaii',
            region: 'West',
            x: 8,
            y: 0,
            value: 259.6
        }, {
            'hc-a2': 'ID',
            name: 'Idaho',
            region: 'West',
            x: 3,
            y: 2,
            value: 241.4
        }, {
            'hc-a2': 'IL',
            name: 'Illinois',
            region: 'Midwest',
            x: 3,
            y: 6,
            value: 287.3
        }, {
            'hc-a2': 'IN',
            name: 'Indiana',
            region: 'Midwest',
            x: 3,
            y: 7,
            value: 306.2
        }, {
            'hc-a2': 'IA',
            name: 'Iowa',
            region: 'Midwest',
            x: 3,
            y: 5,
            value: 286.5
        }, {
            'hc-a2': 'KS',
            name: 'Kansas',
            region: 'Midwest',
            x: 5,
            y: 5,
            value: 414.6
        }, {
            'hc-a2': 'KY',
            name: 'Kentucky',
            region: 'South',
            x: 4,
            y: 6,
            value: 214.1
        }, {
            'hc-a2': 'LA',
            name: 'Louisiana',
            region: 'South',
            x: 6,
            y: 5,
            value: 628.6
        }, {
            'hc-a2': 'ME',
            name: 'Maine',
            region: 'Northeast',
            x: 0,
            y: 11,
            value: 103.3
        }, {
            'hc-a2': 'MD',
            name: 'Maryland',
            region: 'South',
            x: 4,
            y: 8,
            value: 398.5
        }, {
            'hc-a2': 'MA',
            name: 'Massachusetts',
            region: 'Northeast',
            x: 2,
            y: 10,
            value: 322
        }, {
            'hc-a2': 'MI',
            name: 'Michigan',
            region: 'Midwest',
            x: 2,
            y: 7,
            value: 461
        }, {
            'hc-a2': 'MN',
            name: 'Minnesota',
            region: 'Midwest',
            x: 2,
            y: 4,
            value: 280.6
        }, {
            'hc-a2': 'MS',
            name: 'Mississippi',
            region: 'South',
            x: 6,
            y: 6,
            value: 245
        }, {
            'hc-a2': 'MO',
            name: 'Missouri',
            region: 'Midwest',
            x: 4,
            y: 5,
            value: 488
        }, {
            'hc-a2': 'MT',
            name: 'Montana',
            region: 'West',
            x: 2,
            y: 2,
            value: 417.9
        }, {
            'hc-a2': 'NE',
            name: 'Nebraska',
            region: 'Midwest',
            x: 4,
            y: 4,
            value: 282.8
        }, {
            'hc-a2': 'NV',
            name: 'Nevada',
            region: 'West',
            x: 4,
            y: 2,
            value: 454
        }, {
            'hc-a2': 'NH',
            name: 'New Hampshire',
            region: 'Northeast',
            x: 1,
            y: 11,
            value: 125.6
        }, {
            'hc-a2': 'NJ',
            name: 'New Jersey',
            region: 'Northeast',
            x: 3,
            y: 10,
            value: 202.9
        }, {
            'hc-a2': 'NM',
            name: 'New Mexico',
            region: 'West',
            x: 6,
            y: 3,
            value: 780.5
        }, {
            'hc-a2': 'NY',
            name: 'New York',
            region: 'Northeast',
            x: 2,
            y: 9,
            value: 429.3
        }, {
            'hc-a2': 'NC',
            name: 'North Carolina',
            region: 'South',
            x: 5,
            y: 9,
            value: 405.1
        }, {
            'hc-a2': 'ND',
            name: 'North Dakota',
            region: 'Midwest',
            x: 2,
            y: 3,
            value: 279.6
        }, {
            'hc-a2': 'OH',
            name: 'Ohio',
            region: 'Midwest',
            x: 3,
            y: 8,
            value: 293.6
        }, {
            'hc-a2': 'OK',
            name: 'Oklahoma',
            region: 'South',
            x: 6,
            y: 4,
            value: 419.7
        }, {
            'hc-a2': 'OR',
            name: 'Oregon',
            region: 'West',
            x: 4,
            y: 1,
            value: 342.4
        }, {
            'hc-a2': 'PA',
            name: 'Pennsylvania',
            region: 'Northeast',
            x: 3,
            y: 9,
            value: 279.9
        }, {
            'hc-a2': 'RI',
            name: 'Rhode Island',
            region: 'Northeast',
            x: 2,
            y: 11,
            value: 172.3
        }, {
            'hc-a2': 'SC',
            name: 'South Carolina',
            region: 'South',
            x: 6,
            y: 8,
            value: 491.3
        }, {
            'hc-a2': 'SD',
            name: 'South Dakota',
            region: 'Midwest',
            x: 3,
            y: 4,
            value: 377.4
        }, {
            'hc-a2': 'TN',
            name: 'Tennessee',
            region: 'South',
            x: 5,
            y: 7,
            value: 621.6
        }, {
            'hc-a2': 'TX',
            name: 'Texas',
            region: 'South',
            x: 7,
            y: 4,
            value: 431.9
        }, {
            'hc-a2': 'UT',
            name: 'Utah',
            region: 'West',
            x: 5,
            y: 4,
            value: 241.8
        }, {
            'hc-a2': 'VT',
            name: 'Vermont',
            region: 'Northeast',
            x: 1,
            y: 10,
            value: 221.9
        }, {
            'hc-a2': 'VA',
            name: 'Virginia',
            region: 'South',
            x: 5,
            y: 8,
            value: 234
        }, {
            'hc-a2': 'WA',
            name: 'Washington',
            region: 'West',
            x: 2,
            y: 1,
            value: 375.6
        }, {
            'hc-a2': 'WV',
            name: 'West Virginia',
            region: 'South',
            x: 4,
            y: 7,
            value: 277.9
        }, {
            'hc-a2': 'WI',
            name: 'Wisconsin',
            region: 'Midwest',
            x: 2,
            y: 5,
            value: 297
        }, {
            'hc-a2': 'WY',
            name: 'Wyoming',
            region: 'West',
            x: 3,
            y: 3,
            value: 201.9
        }]
    }]
});
Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Where Violent Crimes Happen in The United States',
        align: 'left'
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/explorer/crime/crime-trend"' +
            'target="_blank">UCR Crime Data Explorer</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['Home', 'Street', 'Parking Lot', 'Convenience Store'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Violent crimes (Thousands)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: 'Thousand'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#ffffff',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2020',
        data: [367, 135, 47, 21]
    }, {
        name: 'Year 2021',
        data: [462, 192, 61, 25]
    }, {
        name: 'Year 2022',
        data: [477, 203, 63, 27]
    }]
});