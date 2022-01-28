import {senateData, houseData} from '../data/memberData.mjs';

const statistics = {
    attendance: {
        house: {
            generalInfo: {
                title: 'Attendance - house',
                description: [
                    'attendance-house:The Constitution specifies that a majority of members constitutes a quorum to do business in each ' +
                    'house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; ' +
                    'thus, in most cases, debates continue even if a majority is not present.',

                    'The House uses roll-call votes; a clerk calls out the names of all the senators&, each ' +
                    'senator stating "aye" or "no" when his or her name is announced. The House ' +
                    'reserves roll-call votes for the most formal matters, as a roll-call of all 435 ' +
                    'representatives takes quite some time; normally, members vote by electronic device. In ' +
                    'the case of a tie, the motion in question fails. In the Senate, the Vice President ' +
                    'may (if present) cast the tiebreaking vote.'
                ]
            },
            glance: {
                title: 'House at a Glance',
                columnTitles: {
                    first: 'Party',
                    second: 'No. of Reps',
                    third: '% Missed Votes with Party'
                },
                data: undefined
            },
            least: {
                title: 'Least Engaged (Bottom 10% Attendance)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Missed Votes',
                    third: '% Missed'
                },
                data: undefined
            },
            most: {
                title: 'Most Engaged (Top 10% Attendance)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Missed Votes',
                    third: '% Missed'
                },
                data: undefined
            }
        },
        senate: {
            generalInfo: {
                title: 'Attendance - senate',
                description: [
                    'attendance-senate:The Constitution specifies that a majority of members constitutes a quorum to do business in each ' +
                    'house. Representatives and senators rarely force the presence of a quorum by demanding quorum ' +
                    'calls; thus, in most cases, debates continue even if a majority is not present.',

                    'The Senate uses roll-call votes; a clerk calls out the names of all the senators&, each ' +
                    'senator stating "aye" or "no" when his or her name is announced. The House ' +
                    'reserves roll-call votes for the most formal matters, as a roll-call of all 435 ' +
                    'representatives takes quite some time; normally, members vote by electronic device. In ' +
                    'the case of a tie, the motion in question fails. In the Senate, the Vice President ' +
                    'may (if present) cast the tiebreaking vote.'
                ]
            },
            glance: {
                title: 'Senate at a Glance',
                columnTitles: {
                    first: 'Party',
                    second: 'No. of Reps',
                    third: '% Missed Votes with Party'
                },
                data: undefined
            },
            least: {
                title: 'Least Engaged (Bottom 10% Attendance)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Missed Votes',
                    third: '% Missed'
                },
                data: undefined
            },
            most: {
                title: 'Most Engaged (Top 10% Attendance)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Missed Votes',
                    third: '% Missed'
                },
                data: undefined
            }
        }
    },

    loyalty: {
        house: {
            generalInfo: {
                title: 'Party Loyalty - house',
                description: [
                    'loyalty-house:Those who consider themselves to be strong partisans, strong Democrats and strong Republicans ' +
                    'respectively, tend to be the most faithful in voting for their party\'s nominee for office ' +
                    'and legislation that backs their party\'s agenda.'
                ]
            },
            glance: {
                title: 'House at a Glance',
                columnTitles: {
                    first: 'Party',
                    second: 'No. of Reps',
                    third: '% Voted with Party'
                },
                data: undefined
            },
            least: {
                title: 'Least Loyal (Bottom 10% of Party)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Party Votes',
                    third: '% Party Votes'
                },
                data: undefined
            },
            most: {
                title: 'Most Loyal (Top 10% of Party)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Party Votes',
                    third: '% Party Votes'
                },
                data: undefined
            }
        },
        senate: {
            generalInfo: {
                title: 'Party Loyalty -  senate',
                description: [
                    'loyalty-senate:Those who consider themselves to be strong partisans, strong Democrats and strong Republicans ' +
                    'respectively, tend to be the most faithful in voting for their party\'s nominee for office ' +
                    'and legislation that backs their party\'s agenda.'
                ]
            },
            glance: {
                title: 'Senate at a Glance',
                columnTitles: {
                    first: 'Party',
                    second: 'No. of Reps',
                    third: '% Voted with Party'
                },
                data: undefined
            },
            least: {
                title: 'Least Loyal (Bottom 10% of Party)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Party Votes',
                    third: '% Party Votes'
                },
                data: undefined
            },
            most: {
                title: 'Most Loyal (Top 10% of Party)',
                columnTitles: {
                    first: 'Name',
                    second: 'No. Party Votes',
                    third: '% Party Votes'
                },
                data: undefined
            }
        }
    }
};

// Retrive the params
const params = new URLSearchParams(window.location.search);
const pageType = params.get('page') || 'attendance'; // In case the url param for page is undefined, 'attendance' is set as default
const chamber = params.get('chamber') || 'senate'; // In case the url param for chamber is undefined, 'senate' is set as default

// Retrive the elements
const descriptionContainer = document.getElementById('description');
const glanceTableTitle = document.getElementById('glance-table-title');
const glanceTableColumnTitles = document.getElementById('glance-table-col-titles');
const glanceTableBody = document.getElementById('glance-data');
const leastTableTitle = document.getElementById('least-table-title');
const leastTableColumnTitles = document.getElementById('least-table-col-titles');
const leastTableBody = document.getElementById('least-data');
const mostTableTitle = document.getElementById('most-table-title');
const mostTableColumnTitles = document.getElementById('most-table-col-titles');
const mostTableBody = document.getElementById('most-data');


// Set the data from according to the chamber
const {members: wholeData} = (chamber === 'senate' || chamber === null) ? // This data also crated in member-main-page.js file.
    senateData.results[0] :                                                         // Is there a way to use one in everywhere?
    houseData.results[0];

const partyNames = {
    D: 'Democrats',
    R: 'Republicans',
    ID: 'Independents'
};

// gather and form the data for the glance table
const repeatNumberOfParties = wholeData.filter(({party}) => party !== undefined)
    .map(member => getPartyFullName(member.party))                                                   // Here we first we update the abbreviations with the real names of the parties with map method.
    .reduce((partyRepeatNumbersObject, party) => {                                                  // map method returns an array like ['Democrats', 'Republicans', 'Independents']
    partyRepeatNumbersObject[party] = (partyRepeatNumbersObject[party] || 0) + 1;                   // Then we calculate the repeat numbers of each party and put it in an object with reduce method.
    return partyRepeatNumbersObject;                                                                // // reduce method returns an object like {Democrats:49, Republicans: 51, Independents: 2}
}, {});

const partyStatisticsTotal = {
    party: 'Total',
    repeatNumber: Object.values(repeatNumberOfParties).reduce((first, second) => first + second),
    percentage: Object.keys(repeatNumberOfParties)
        .map(partyName => {
            const partyAbbreviation = getPartyAbbreviation(partyName);
            return averagePercentageValuesPerParty(partyAbbreviation);
        }).reduce((first, second) => first + second).toFixed(2)
}

const partyStatisticsData = Object.entries(repeatNumberOfParties).reduce((partyStatistics, [party, repeatNumber]) => { // Object.entries returns an array with arrays inside like [['Democrats', 49],['Republicans', 51],['Independents','2']]
    const partyAbbreviation = getPartyAbbreviation(party);
    const percentage = averagePercentageValuesPerParty(partyAbbreviation).toFixed(2);                       // Reduce method returns an array with objects in.
    partyStatistics.push({ party, repeatNumber, percentage });                  // The objects are holding the statistics of each party name, repeat, percentage
    return partyStatistics;
}, []);

partyStatisticsData.push(partyStatisticsTotal);     // This is to add the last row about the total values of the glance table


statistics[pageType][chamber]['glance'].data = partyStatisticsData;
const {data: glanceData} = statistics[pageType][chamber]['glance'];


// gather and form the data for the attendance least and most table
const attendanceData = wholeData.map(member => ({       // Here the whole data is already either Senate or House and we are mapping senate or house data with three properties.
    name: `${member.first_name} ${member.last_name}`,
    missedVotes: member.missed_votes,
    percentageMissedVotes: member.missed_votes_pct,
    linkUrl: member.url
}))
    .filter(({percentageMissedVotes, missedVotes}) => (percentageMissedVotes !== undefined && missedVotes !== undefined)); // we use specifically undefined to be able to get the value of 0(zero)


// gather and form the data for the loyalty least and most table
const loyaltyData = wholeData.map(member => ({       // Here the whole data is already either Senate or House and we are mapping senate or house data with three properties.
    name: `${member.first_name} ${member.last_name}`,
    totalVotes: member.total_votes,
    votesWithParty: member.votes_with_party_pct,
    linkUrl: member.url
}))
    .filter(({votesWithParty, totalVotes}) => (votesWithParty !== undefined && totalVotes !== undefined));      // we use specifically undefined to be able to get the value of 0(zero)

// Assign sorted Attendance and  Loyalty data for least and most tables and create destructing to use while creating the tables.
assignDataToObject('least');
const {data: leastData} = statistics[pageType][chamber]['least'];  //destruction

assignDataToObject('most');
const {data: mostData} = statistics[pageType][chamber]['most'];


function averagePercentageValuesPerParty(partyAbbreviation) {
    const propertyToCalculate = pageType === 'attendance' ? 'missed_votes_pct' : 'votes_with_party_pct';
    const sumOfPropertyValuesPerParty = wholeData.filter(({party}) => party === partyAbbreviation)
        .filter(member => member[propertyToCalculate] !== undefined)
        .map(member => member[propertyToCalculate])
        .reduce((previousMember, currentMember) => previousMember + currentMember);
    return sumOfPropertyValuesPerParty / repeatNumberOfParties[getPartyFullName(partyAbbreviation)];
}

function getPartyFullName (partyAbbreviation) {
    return partyNames[partyAbbreviation];
}
function getPartyAbbreviation (partyFullName) {
    return Object.entries(partyNames).find(([_, partyName]) => partyName === partyFullName)?.[0];

}

function addDescription() {
    const title = document.createElement('h4');
    addTitleText(title, 'generalInfo')
    descriptionContainer.appendChild(title);
    addParagraphs();
}

function createGlanceTable() {
    addTitleText(glanceTableTitle, 'glance', 'right');
    addTableColumnTitles(glanceTableColumnTitles, 'glance');
    glanceData.forEach(createGlanceTableRows);   // glanceData = [{party: 'Democrats', repeats: 49, percentage: 48}, {}, {}]    partyStats = {party: 'Democrats', repeats: 49, percentage: 48} and every iteration it takes the next party
}

function createLeastTable() {
    addTitleText(leastTableTitle, 'least');
    addTableColumnTitles(leastTableColumnTitles, 'least');
    leastData.forEach(createLeastMostTableRows(leastTableBody));
}

function createMostTable() {
    addTitleText(mostTableTitle, 'most');
    addTableColumnTitles(mostTableColumnTitles, 'most');
    mostData.forEach(createLeastMostTableRows(mostTableBody));
}

function addTitleText(tableTitle, tableType, alignment = 'left') {
    tableTitle.textContent = statistics[pageType][chamber][tableType].title;
    tableTitle.style.textAlign = alignment;
}

function addTableColumnTitles (tableColumnTitles, tableType) {
    const columnTitles = statistics[pageType][chamber][tableType]['columnTitles'];
    Object.values(columnTitles).forEach(title => {
        const rowCell = document.createElement('th');
        rowCell.scope = 'col';
        const rowCellText = document.createTextNode(`${title}`);
        rowCell.appendChild(rowCellText);
        tableColumnTitles.appendChild(rowCell);
    })
}

function addParagraphs() {
    statistics[pageType][chamber]['generalInfo'].description.forEach(text => {
        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode(text);
        paragraph.appendChild(paragraphText);
        descriptionContainer.appendChild(paragraph);
    })
}

function createLeastMostTableRows (tableName) {
    return function (statisticData) {
        const tableRow = document.createElement('tr');
        Object.values(statisticData).forEach((value, index, array) => {   // For Glance table: Object.values(partyStats) = ['Democrats', 49, 48] and every iteration it will get the next party's statistics.
            if (index < array.length-1){      // Not to add the url link into the table
                const tableCell = document.createElement('td');

                const tableCellText = (index === 0 && array[array.length-1])   // This condition to add the url links to names
                    ? createAnchorTag(value, array[array.length-1])
                    : (index === 2)                                 // this condition to put the % sign only in percentage value cell
                    ? document.createTextNode(`${value}%`)
                    : document.createTextNode(`${value}`);

                tableCell.appendChild(tableCellText);
                if (index !== 0) {
                    tableCell.style.textAlign = 'center';                  // To center only the numbers not the party names.
                }
                tableRow.appendChild(tableCell);
            }
        })
        tableName.appendChild(tableRow);
    };
}

function createGlanceTableRows (statisticData) {
        const tableRow = document.createElement('tr');
        Object.values(statisticData).forEach((value, index) => {   // For Glance table: Object.values(partyStats) = ['Democrats', 49, 48] and every iteration it will get the next party's statistics.
            const tableCell = document.createElement('td');
            const tableCellText = index === 2 ?                       // to put the % sign only in percentage value cell
                document.createTextNode(`${value}%`) :
                document.createTextNode(`${value}`);
            tableCell.appendChild(tableCellText);
            if (index !== 0) {
                tableCell.style.textAlign = 'center';                  // To center only the numbers not the party names.
            }
            tableRow.appendChild(tableCell);
        })
        glanceTableBody.appendChild(tableRow);
}

function createAnchorTag(anchorText, urlValue) {
    const anchorTag = document.createElement('a');
    const anchorTagText = document.createTextNode(anchorText);
    anchorTag.href = urlValue;
    anchorTag.target = '_blank';
    anchorTag.appendChild(anchorTagText);
    return anchorTag;
}

function assignDataToObject (tableType) {
    statistics[pageType][chamber][tableType].data = pageType === 'attendance' ?
    sortData(attendanceData, 'missedVotes', tableType):
    sortData(loyaltyData, 'votesWithParty', tableType);
}

function sortData(data, property, tableType, N = wholeData.length / 10) {
    const sortedData = data.sort((memberA, memberB) => {
        return tableType === 'least' ?
            memberA[property] - memberB[property] :
            memberB[property] - memberA[property];
    });
    return sortedData.slice(0, N);
}

addDescription();
createGlanceTable();
createLeastTable();
createMostTable();