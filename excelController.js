const xlsx = require('xlsx');

module.exports = {
  readExcelController: (req, res) => {
    const workbook = xlsx.readFile('./Quiz_Question.xlsx');
    let workbook_sheet = workbook.SheetNames;
    let workbook_response = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook_sheet[0]]
    );
    res.status(200).send({
      message: workbook_response,
    });
  },
};
