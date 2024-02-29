function convertTime(hm) {
    const hmArray = hm.split(":");
    const time = parseInt(hmArray[0]) * 60 + parseInt(hmArray[1]);
    return time;
}

function solution(plans) {
    const sortedPlans = plans.map(([name, start, playtime]) => [name, convertTime(start), parseInt(playtime)]).sort((a, b) => a[1] - b[1]);
    let answer = [];
    let left = [];
    for (let i = 0; i < sortedPlans.length - 1; i++) {
        const [name, time, count] = sortedPlans[i];
        
        if (time + count <= sortedPlans[i + 1][1]) {
            answer.push(name);
            let availableTime = sortedPlans[i + 1][1] - (time + count);
            
            while (left.length) {
                const [leftName, leftTime] = left.pop();
                if (leftTime <= availableTime) {
                    availableTime -= leftTime;
                    answer.push(leftName);
                } else {
                    left.push([leftName, leftTime - availableTime]);
                    break;
                }
            }
        } else {
            left.push([name, count - (sortedPlans[i + 1][1] - time)])
        }
    }
        answer.push(sortedPlans[sortedPlans.length -1][0]);
    while (left.length) {
        answer.push(left.pop()[0]);
    }
    return answer;
}
