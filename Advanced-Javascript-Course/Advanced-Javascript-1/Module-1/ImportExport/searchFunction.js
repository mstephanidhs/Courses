export default function getMatchingTripsArr(arr, keyword){
    return arr.filter(function(trip){
        return trip.description.toLowerCase().includes(keyword)
    })
}