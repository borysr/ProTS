// tslint:disable typedef
// - Open Close Principle
class RewardPointsCalculator {
    getPoints(transactionValue: number) {
        return Math.floor(transactionValue) * 4;
    }
}

class DoubleRewardPointsCalculator extends RewardPointsCalculator {
    getPoints(transactionValue: number) {
        var standardPoints = super.getPoints(transactionValue);
        return standardPoints * 2;
    }
}

var pointsCalculator = new DoubleRewardPointsCalculator();
console.log(pointsCalculator.getPoints(100.99));