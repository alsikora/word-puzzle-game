class RankingController {
    constructor($scope, $timeout, Firebase) {
        this.entries = [];
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.firebase = Firebase;

        this.firebase.playersRef.orderByChild('score').on('value', this.setEntries.bind(this));
    }

    setEntries(snapshot) {
        let players = [];
        snapshot.forEach(childSnapshot => {
            players.push(childSnapshot.val());
        });
        this.entries = players.reverse();

        //@todo: needs improve
        this.$timeout(() => {
            this.$scope.$apply();
        }, 0);
    }
}

RankingController.$inject = ['$scope', '$timeout', 'Firebase'];
export default RankingController;
