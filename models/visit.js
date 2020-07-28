class VisitRepository {
    constructor() {
        this.visits = []
    }

    add(visit) {
        this.visits.push(visit)
    }

    findByDate(date) {
        return this.visits.filter((visit) => {
            return visit.date.getTime() === date.getTime();
        });
    }
}

const visitRepository = new VisitRepository();

visitRepository.add({visitId: 1, userId: 1, branchId: 1, date: new Date("2020-07-28")});
visitRepository.add({visitId: 2, userId: 1, branchId: 2, date: new Date("2020-07-28")});
visitRepository.add({visitId: 3, userId: 2, branchId: 1, date: new Date("2020-07-28")});
visitRepository.add({visitId: 4, userId: 3, branchId: 2, date: new Date("2020-07-28")});
visitRepository.add({visitId: 5, userId: 4, branchId: 1, date: new Date("2020-07-28")});
visitRepository.add({visitId: 6, userId: 5, branchId: 1, date: new Date("2020-07-28")});
visitRepository.add({visitId: 7, userId: 6, branchId: 2, date: new Date("2020-07-28")});
visitRepository.add({visitId: 8, userId: 7, branchId: 1, date: new Date("2020-07-15")});
visitRepository.add({visitId: 9, userId: 8, branchId: 1, date: new Date("2020-07-13")});
visitRepository.add({visitId: 10, userId: 9, branchId: 1, date: new Date("2020-07-14")});

module.exports = {visitRepository};