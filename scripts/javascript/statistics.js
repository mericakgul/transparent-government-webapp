const structures = [
    {
        id: 'attendance',
        pages: {
            house: [
                {
                    title: 'Attendance',
                    description: [
                        'ooooooThe Constitution specifies that a majority of members constitutes a quorum to do business in each ' +
                        'house&#8228; Representatives and senators rarely force the presence of a quorum by demanding quorum calls; ' +
                        'thus&#8218; in most cases&#8218; debates continue even if a majority is not present&#8228;',

                        'The Senate uses roll&#8208;call votes; a clerk calls out the names of all the senators&#8218; each ' +
                        'senator stating &#34;aye&#34; or &#34;no&#34; when his or her name is announced&#8228; The House ' +
                        'reserves roll&#8208;call votes for the most formal matters&#8218; as a roll&#8208;call of all 435 ' +
                        'representatives takes quite some time; normally&#8218; members vote by electronic device&#8228; In ' +
                        'the case of a tie&#8218; the motion in question fails&#8228; In the Senate&#8218; the Vice President ' +
                        'may &#40;if present&#41; cast the tiebreaking vote&#8228;'
                    ]
                },
                {
                    title: 'House at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Engaged &#40;Bottom 10&#37; Attendance&#41;',
                    leastEngagedData: undefined
                },
                {
                    title: 'Most Engaged &#40;Top 10&#37; Attendance&#41;',
                    mostEngagedData: undefined
                }
            ],
            senate: [
                {
                    title: 'Attendance',
                    description: [
                        'The Constitution specifies that a majority of members constitutes a quorum to do business in each ' +
                        'house&#8228; Representatives and senators rarely force the presence of a quorum by demanding quorum ' +
                        'calls; thus&#8218; in most cases&#8218; debates continue even if a majority is not present&#8228;',

                        'The Senate uses roll&#8208;call votes; a clerk calls out the names of all the senators&#8218; each ' +
                        'senator stating &#34;aye&#34; or &#34;no&#34; when his or her name is announced&#8228; The House ' +
                        'reserves roll&#8208;call votes for the most formal matters&#8218; as a roll&#8208;call of all 435 ' +
                        'representatives takes quite some time; normally&#8218; members vote by electronic device&#8228; In ' +
                        'the case of a tie&#8218; the motion in question fails&#8228; In the Senate&#8218; the Vice President ' +
                        'may &#40;if present&#41; cast the tiebreaking vote&#8228;'
                    ]
                },
                {
                    title: 'Senate at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Engaged &#40;Bottom 10&#37; Attendance&#41;',
                    leastEngagedData: undefined
                },
                {
                    title: 'Most Engaged &#40;Top 10&#37; Attendance&#41;',
                    mostEngagedData: undefined
                }
            ]
        }
    },
    {
        id: 'loyalty',
        pages: {
            house: [
                {
                    title: 'Party Loyalty',
                    description:
                        'Those who consider themselves to be strong partisans&#8218; strong Democrats and strong Republicans ' +
                        'respectively&#8218; tend to be the most faithful in voting for their party&#39;s nominee for office ' +
                        'and legislation that backs their party&#39;s agenda&#8228;'
                },
                {
                    title: 'House at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Loyal &#40;Bottom 10&#37; of Party&#41;',
                    leastLoyalData: undefined
                },
                {
                    title: 'Most Loyal &#40;Top 10&#37; of Party&#41;',
                    mostLoyalData: undefined
                }
            ],
            senate: [
                {
                    title: 'Party Loyalty',
                    description:
                        'Those who consider themselves to be strong partisans&#8218; strong Democrats and strong Republicans ' +
                        'respectively&#8218; tend to be the most faithful in voting for their party&#39;s nominee for office ' +
                        'and legislation that backs their party&#39;s agenda&#8228;'
                },
                {
                    title: 'Senate at a Glance',
                    glanceData: undefined
                },
                {
                    title: 'Least Loyal &#40;Bottom 10&#37; of Party&#41;',
                    leastLoyalData: undefined
                },
                {
                    title: 'Most Loyal &#40;Top 10&#37; of Party&#41;',
                    mostLoyalData: undefined
                }
            ]
        }
    }
];



const firstRowFirstColumn = document.querySelector('.test');
const parag = document.createElement('p');
const text = document.createTextNode(structures[0].pages.house[0].description[0]);
parag.appendChild(text);
firstRowFirstColumn.appendChild(parag);
