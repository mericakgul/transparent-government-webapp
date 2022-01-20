import {senateData, houseData} from '../data/memberData.mjs';

const structures = {
        attendance: {
            house: [
                {
                    title: 'Attendance - house',
                    description: [
                        'attendance-house:The Constitution specifies that a majority of members constitutes a quorum to do business in each ' +
                        'house. Representatives and senators rarely force the presence of a quorum by demanding quorum calls; ' +
                        'thus, in most cases, debates continue even if a majority is not present.',

                        'The Senate uses roll-call votes; a clerk calls out the names of all the senators&, each ' +
                        'senator stating "aye" or "no" when his or her name is announced. The House ' +
                        'reserves roll-call votes for the most formal matters, as a roll-call of all 435 ' +
                        'representatives takes quite some time; normally, members vote by electronic device. In ' +
                        'the case of a tie, the motion in question fails. In the Senate, the Vice President ' +
                        'may (if present) cast the tiebreaking vote.'
                    ]
                },
                {
                    title: 'House at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Engaged (Bottom 10% Attendance)',
                    leastEngagedData: undefined
                },
                {
                    title: 'Most Engaged (Top 10% Attendance)',
                    mostEngagedData: undefined
                }
            ],
            senate: [
                {
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
                {
                    title: 'Senate at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Engaged (Bottom 10% Attendance)',
                    leastEngagedData: undefined
                },
                {
                    title: 'Most Engaged (Top 10% Attendance)',
                    mostEngagedData: undefined
                }
            ]
        },
        loyalty: {
            house: [
                {
                    title: 'Party Loyalty - house',
                    description:
                        'loyalty-house:Those who consider themselves to be strong partisans, strong Democrats and strong Republicans ' +
                        'respectively, tend to be the most faithful in voting for their party\'s nominee for office ' +
                        'and legislation that backs their party\'s agenda.'
                },
                {
                    title: 'House at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Loyal (Bottom 10% of Party)',
                    leastLoyalData: undefined
                },
                {
                    title: 'Most Loyal (Top 10% of Party)',
                    mostLoyalData: undefined
                }
            ],
            senate: [
                {
                    title: 'Party Loyalty -  senate',
                    description:
                        'loyalty-senate:Those who consider themselves to be strong partisans, strong Democrats and strong Republicans ' +
                        'respectively, tend to be the most faithful in voting for their party\'s nominee for office ' +
                        'and legislation that backs their party\'s agenda.'
                },
                {
                    title: 'Senate at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Loyal (Bottom 10% of Party)',
                    leastLoyalData: undefined
                },
                {
                    title: 'Most Loyal (Top 10% of Party)',
                    mostLoyalData: undefined
                }
            ]
        }
    };

// Retrive the params
const params = new URLSearchParams(window.location.search);
console.log('params', params);
const pageType = params.get('page');
console.log('pageType', pageType);
const chamber = params.get('chamber');
console.log('chamber', chamber);

// Retrive the elements
const  descriptionContainer = document.getElementById('description');
const  glanceTable = document.getElementById('glance-data');
const  leastTable = document.getElementById('least-data');
const  mostTable = document.getElementById('most-data');

if (pageType === 'attendance' && chamber === 'house'){
    const title = document.createElement('h1');
    const titleText = document.createTextNode(structures[0].pages.house[0].title);
    title.appendChild(titleText);
    descriptionContainer.appendChild(title);
    structures[0].pages.house[0].description.forEach(text => {
        const paragraph = document.createElement('p');
        const paragraphText = document.createTextNode(text);
        paragraph.appendChild(paragraphText);
        descriptionContainer.appendChild(paragraph);
    })
}

// const firstRowFirstColumn = document.querySelector('.test');
// const parag = document.createElement('p');
// const text = document.createTextNode(structures[0].pages.house[0].description[0]);
// parag.appendChild(text);
// firstRowFirstColumn.appendChild(parag);
