let now = Date.now()
let dailySpend = 600
let channels = ['Facebook', 'Google', 'Line', 'Yahoo JP', 'Tiktok']
let channelSpendDist = [0.35, 0.28, 0.1, 0.15, 0.12]
let channelCPMDist = [8.96, 3.43, 4.22, 5.44, 9.25]
let channelCTRDist = [0.3, 0.42, 0.28, 0.18, 0.62]
let channelConvDist = [1.5, 0.8, 2.3, 1.2, 3.2]

let addNoise = (x) => 0.9*x + Math.random()*0.2*x

let totals = { spend: 0, impr: 0, clicks: 0, conv: 0 }
let channelTotals = channels.map(c => Object.assign({}, totals))

let trend = {
  spend: [],
  impressions: [],
  clicks: [], 
  conversions: []
}

for (let i=0; i<30; i++) {
  let tm = now - (i+1) * 86400 * 1000
  let spend = addNoise(dailySpend) + 100*Math.sin(i*5*0.0174533)

  // calc channel distributions
  let spends = channelSpendDist.map(c => c * spend)
  let imprs = spends.map((s, i) => Math.floor(addNoise(s)*1000/channelCPMDist[i]))
  let clicks = imprs.map((impr, i) => Math.floor(addNoise(impr)*channelCTRDist[i]/100))
  let convs = clicks.map((click, i) => Math.floor(addNoise(click)*channelConvDist[i]/100))

  //console.log(spends)
  //console.log(imprs)
  //console.log(clicks)
  
  // calc totals
  totals.spend += spend
  let totalImpr = 0
  let totalClicks = 0
  let totalConvs = 0
  for (let c=0; c<5; c++) {
    totalImpr += imprs[c]
    totalClicks += clicks[c]
    totalConvs += convs[c]

    channelTotals[c].spend += spends[c]
    channelTotals[c].impr += imprs[c]
    channelTotals[c].clicks += clicks[c]
    channelTotals[c].conv += convs[c]
  }
  totals.impr += totalImpr
  totals.clicks += totalClicks
  totals.conv += totalConvs

  trend.spend.push({x: tm, y: spend})
  trend.impressions.push({x: tm, y: totalImpr})
  trend.clicks.push({x: tm, y: totalClicks})
  trend.conversions.push({x: tm, y: totalConvs})
}

//console.log(totals)
//console.log(channelTotals)
console.log(trend)
console.log(totals)
console.log(channelTotals.map((c,i) => { c.name=channels[i]; return c }))