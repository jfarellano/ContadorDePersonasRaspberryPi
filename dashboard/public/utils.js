export default {
    average(size, average, value) {
        return (size * average + value) / (size + 1)
    },
    hourAvergage(data, action, initial, final) {
        initial = initial ? initial : new Date(0)
        final = final ? final : new Date()
        let hourly = {
            labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
            data: [],
            size: []
        }
        Object.values(data).forEach(day => {
            let total = 0
            if (day.jsDate <= final && day.jsDate >= initial) {
                Object.keys(day.hourly).sort().forEach(hour => {
                    let index = parseInt(hour)
                    let value = hourly.data[index]
                    let size = hourly.size[index]
                    let hourTotal = day.hourly[hour]["IN"] - day.hourly[hour]["OUT"]
                    total = total + hourTotal
                    let ammount = action == "TOTAL" ? total : day.hourly[hour][action]
                    if (value) {
                        value = this.average(size, value, ammount)
                        ++size
                    } else if (ammount) {
                        value = ammount
                        size = 1
                    }
                    hourly.data[index] = value
                    hourly.size[index] = size
                })
            }
        })
        return hourly
    },
    todayStats(data, action){
        // "November 20, 2021 07:15:00"
        let date = new Date()
        let nowHour = (date.getHours() + '').length == 1 ? "0" + date.getHours() : date.getHours() + ""
        let day = data[date.toISOString().split('T')[0]]
        let total = 0
        if (day) {
            Object.keys(day.hourly).sort().forEach(hour => {
                if(nowHour >= hour) {
                    if (action == "TOTAL") {
                        let hourTotal = day.hourly[hour]["IN"] - day.hourly[hour]["OUT"]
                        total = total + hourTotal
                    } else {
                        total += day.hourly[hour][action]
                    }
                }
            })
        }else return 0
        return total
    }
}