function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

    function filterTable() {
        const nameFilter = document.getElementById('nameSearch').value.toLowerCase();
        const empNoFilter = document.getElementById('empNoSearch').value.toLowerCase();
        const designationFilter = document.getElementById('designationSearch').value.toLowerCase();
        const departmentFilter = document.getElementById('departmentSearch').value.toLowerCase();

        const table = document.querySelector('.table tbody');
        const rows = table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            const name = cells[1].innerText.toLowerCase();
            const empNo = cells[2].innerText.toLowerCase();
            const designation = cells[3].innerText.toLowerCase();
            const department = cells[5].innerText.toLowerCase();

            if (name.includes(nameFilter) && empNo.includes(empNoFilter) && designation.includes(designationFilter) && department.includes(departmentFilter)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    }
