import {senateData} from '../data/senateData.mjs';
import {states} from "../data/states.mjs";

const {members : wholeSenateData} = senateData.results[0]; // this is another way: data.results[0].members;
                                                        // This gets the whole data about only members from json file. And the property name members is renamed as wholeSenateData

const statesInSenateData = [...new Set(wholeSenateData.map(({state}) => state))];
console.log('statesInSenateData', statesInSenateData);

Array.from(document.querySelectorAll('.form-check-input'))
    .forEach(element => element
        .addEventListener('click', (event) => {
            initTable();
}));

document.querySelector('#stateList').addEventListener('change', event => initTable());

initTable();

function initTable () {
    createStatesDropDown ();
    document.getElementById('senate-data').innerHTML = '';
    const summarySenateData = filterData();
    createTable(summarySenateData);
}

function createStatesDropDown () {
    const  statesDropdown = document.getElementById('stateList'); // stateList is the id of the dropdown element in html
    states.forEach(({name, abbreviation}) => {
        const dropdownOption = document.createElement('option');
        dropdownOption.value = abbreviation;
        const optionText = document.createTextNode(name);
        dropdownOption.appendChild(optionText);
        statesDropdown.appendChild(dropdownOption);
    })
}

function filterData() {
    const selectedState = Array.from(document.querySelectorAll('#stateList option')).filter(({selected}) => selected)[0]; // This line is to get the selected state from the dropdown.
                                                                                                                                    // This array has only one element which is the object of selected dropdown element.
    const checkedParties = Array.from(document.querySelectorAll('.form-check-input'))  // This line returns all the check-box elements as an object of each in an array.
        //.filter(member => member.checked)  // This is the first way. The bottom line is destructing.
        .filter(({checked}) => checked)  // This line is to filter the unchecked items from the array.
        //.map(member => member.value)  // This is the first way. The bottom line is destructing.
        .map(({value}) => value); // This line is to get the checked items' values in an array like ['R', 'D', 'ID']

    // This part first filters the data according to party checkboxes and state dropdown and map the data about the members to have only the required data like name, state, party ...
    // [{name: xxx, party: D, state: MI,....}, {name: yyy, party: R, state: NY,....}, {}, .... {}] 102 objects (if not  filtered) inside the array and
    // each object has these properties: name, party, state, yearsInOffice, votePercentageWithParty and linkUrl.
    const filteredDataByParty = checkedParties.length !== 0 ?  // This line checks if any checkboxes is selected.
        wholeSenateData.filter(({party}) => checkedParties.includes(party)) : // This line filters the senate list by party according to checked checkboxes
        wholeSenateData;                                     // In case no checkbox is selected then no need to filter the data by party because we show whole data in the table in this case

    const filteredData = selectedState.value !== 'default' ?  // This line checks if the state dropdown doesn't have the default value ('Select A State')
        filteredDataByParty.filter(({state}) => state === selectedState.value) :   // This line filters the senate list according to selected states from the dropdown
        filteredDataByParty;                                   // In case the dropdown has the default value no need to filter the data according to dropdown.

    return filteredData         // These lines are mapping the senate data after the filters with the summary data (name, party, state,...)
        .map(member => ({
            name: `${member.first_name} ${member.last_name}`,
            party: member.party,
            state: member.state,
            yearsInOffice: member.seniority,
            votePercentageWithParty: member.votes_with_party_pct,
            linkUrl: member.url
        }));
}

function createTable (senateData) {
    senateData.forEach(createTableRow);
}

function createTableRow(member) {    // member = {name: xxx, party: D, state: MI,....} and getting the next object in each iteration
    const  tableBody = document.getElementById('senate-data'); // senate-data is the id of the table body element in html
    const tableRow = document.createElement('tr');
    Object.values(member).forEach((value, index, array) => {   // Object.values(member) is ['xxx', 'D', 'MI,....]
        if (index < array.length-1){                // This condition is to filter the urls not to show in the table. Only one array has been created (summarySenateData).
                                                    // Another array for the urls wasn't created to have the consistency.
            const rowCell = document.createElement('td');
            const rowCellText = (index === 0)
                ? createAnchorTag(value, array[array.length-1])
                : document.createTextNode(value);
            rowCell.appendChild(rowCellText);
            tableRow.appendChild(rowCell);
        }
    })
    tableBody.appendChild(tableRow);
}

function createAnchorTag(anchorText, urlValue) {
    const anchorTag = document.createElement('a');
    const anchorTagText = document.createTextNode(anchorText);
    anchorTag.href = urlValue;
    anchorTag.target = '_blank';
    anchorTag.appendChild(anchorTagText);
    return anchorTag;
}




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

