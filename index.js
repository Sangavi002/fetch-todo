async function fetchData() {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        console.log(data);
        appendData(data)
    }
    catch(err){
        console.log(err);
    }
}
fetchData()
let tbody = document.querySelector('tbody')
function appendData(data){

    data.forEach(ele => {
        let tRow = document.createElement('tr');
        let tdid = document.createElement('td');
        tdid.textContent = ele.id;
        let tdTitle = document.createElement('td');
        tdTitle.textContent = ele.title;
        let tdStatus = document.createElement('td');
        tdStatus.textContent = ele.completed;
        if(ele.completed === true){
            tdStatus.style.color = 'green';
            tdTitle.style.color = 'green';
            tdid.style.color = 'green';
        }
        else{
            tdStatus.style.color = 'red';
            tdTitle.style.color = 'red';
            tdid.style.color = 'red';
        }
        
        tRow.append(tdid,tdTitle,tdStatus);
        tbody.append(tRow)
    });

}