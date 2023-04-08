import moment from 'moment';

export const sortByData = ({type, isAscending, data}) => {
  if (type === 'date') {
    if (isAscending === 'ascending') {
      data.sort(
        (a, b) => moment(a.date, 'MM-DD-YYYY') - moment(b.date, 'MM-DD-YYYY'),
      );

      return data;
    }
    data.sort(
      (a, b) => moment(b.date, 'MM-DD-YYYY') - moment(a.date, 'MM-DD-YYYY'),
    );
  } else {
    if (isAscending === 'ascending') {
      const sortedData = data.sort((a, b) =>
        a.transactionNo.localeCompare(b.transactionNo),
      );
      return sortedData;
    }
    const sortedData = data.sort((a, b) =>
      b.transactionNo.localeCompare(a.transactionNo),
    );
    return sortedData;
  }
};
