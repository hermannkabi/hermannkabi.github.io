function html_table_to_excel()
    {
        var data = document.getElementById('word-table');

        var file = XLSX.utils.table_to_book(data, {sheet: "Table"});

        XLSX.write(file, { bookType: "xlsx", bookSST: true, type: 'base64' });

        XLSX.writeFile(file, 'table.xlsx');
    }


$(".export-button").click(function (){
  html_table_to_excel();
});
