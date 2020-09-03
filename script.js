var inventors = [
    { 'name': 'Einstein', 'birth': '1879', 'death': '1955' },
    { 'name': 'Newton', 'birth': '1643', 'death': '1727' },
    { 'name': 'Galilei', 'birth': '1564', 'death': '1642' },
    { 'name': 'Curie', 'birth': '1867', 'death': '1934' },
    { 'name': 'Kepler', 'birth': '1571', 'death': '1630' },
    { 'name': 'Copernicus', 'birth': '1473', 'death': '1543' },
    { 'name': 'Planck', 'birth': '1858', 'death': '1947' },
    { 'name': 'Blodgett', 'birth': '1898', 'death': '1979' },
    { 'name': 'Lovelace', 'birth': '1815', 'death': '1852' },
    { 'name': 'Goode', 'birth': '1855', 'death': '1905' },
    { 'name': 'Meitner', 'birth': '1878', 'death': '1968' },
    { 'name': 'Hammarström', 'birth': '1829', 'death': '1909' }
];

buildTable(inventors);

function buildTable(data)
{
    var table = document.getElementById('table');
    table.innerHTML = '';
    for(var i=0; i<data.length; i++)
    {
        var row = `<tr>
           <td>${data[i].name}</td>
           <td>${data[i].birth}</td>
           <td>${data[i].death}</td>
        </tr>`;
        table.innerHTML += row;
    }
}

var headers = document.getElementsByName('header');
headers.forEach(header => {
    header.addEventListener('click', (e)=>{
        let column = e.target.attributes[0].textContent;
        let order = e.target.attributes[1].textContent;
        let text = e.path[0].textContent;
        text = text.substring(0, text.length-1)
        if(order == 'descending')
        {
            e.target.attributes[1].textContent = 'ascending';
            inventors = inventors.sort((a, b) => a[column] > b[column] ? 1 : -1) 
            text += '&#9660';
        }
        else
        {
            e.target.attributes[1].textContent = 'descending';
            inventors = inventors.sort((a, b) => a[column] < b[column] ? 1 : -1)
            text += '&#9650';
        }
        e.path[0].innerHTML=text;
        buildTable(inventors);
        console.log(e)
    })
})


