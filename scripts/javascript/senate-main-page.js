
import {data} from '../data/senateData.mjs';

const wholeSenateData = data.results[0].members;  // This gets the whole data about only members from json file

// This filters the edata about the member to have only the required data like name, state, party ...
// [{name: xxx, party: D, state: MI,....}, {name: yyy, party: R, state: NY,....}, {}, .... {}] 102 objects inside the array and
// each object has these propeerties: name, party, state, yearsInOffice, votePercentageWithParty and linkUrl.
const summarySenateData = wholeSenateData.map(member => ({name: `${member.first_name} ${member.last_name}`,
    party: member.party, state: member.state, yearsInOffice: member.seniority, votePercentageWithParty: member.votes_with_party_pct, linkUrl: member.url}));

const  tableBody = document.getElementById('senate-data'); // senate-data is the id of the table body element in html

summarySenateData.forEach((member) =>  {         // member = {name: xxx, party: D, state: MI,....} and getting the next object in each iteration
    const tableRow = document.createElement('tr');
    Object.values(member).forEach((value, index, array) => {   // Object.values(member) is ['xxx', 'D', 'MI,....]
        if (index < array.length-1){             // This condition to eliminate the urls. Only one array has been created (summarySenateData). Another array for the urls wasn't created.
            const rowCell = document.createElement('td');
            if (index === 0){         // adding the links to the names
                const anchorTag = document.createElement('a');
                const anchorTagText = document.createTextNode(value);
                anchorTag.href = array[array.length-1];
                anchorTag.target = '_blank';
                anchorTag.appendChild(anchorTagText);
                rowCell.appendChild(anchorTag);
                tableRow.appendChild(rowCell);
            }
            else  {
                const rowCellText = document.createTextNode(value);
                rowCell.appendChild(rowCellText);
                tableRow.appendChild(rowCell);
            }
        }
    })
    tableBody.appendChild(tableRow);
})





//    ////////////////// To get the property names //////////////////
//     if(index === 0) {
//         console.log(Object.keys(member).map(key => key.charAt(0).toUpperCase() + key.slice(1)));

//    //          -----Second way-----
//    //         console.log(Object.keys(member).map(key => {
//    //             const [firstLetter, ...rest] = key.split('');
//    //             return firstLetter.toUpperCase() + rest.join('');
//    //         }))
//     }
//    ///////////////////////////////////////////////////////////////

