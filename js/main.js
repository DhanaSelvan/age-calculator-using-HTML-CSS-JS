
const calculate = () => {
    const dateOf = document.getElementById('dob').value;
    const date = new Date();
    // alert(dob)
    if(dob=='' || dob==null) {
        alert('Enter your Date of Birth')
    } else {
        const currentDate = date.toISOString().slice(0,10)
        // alert(currentDate)
        let dob = new Date(dateOf)
        let age = date.getFullYear()-dob.getFullYear();
        var monthDiff = date.getMonth()-dob.getMonth();
        if (monthDiff<0 || (monthDiff===0 && date.getDate()<dob.getDate())) {
            age--;
        }
        document.getElementById('age').innerHTML = age;
    }
}