import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#d11fb6',
    color: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});
const data = {
  organizationName: 'Green Fields Agro',
  address: '456 Farm Road, Countryside',
  billTitle: 'Monthly Milk Collection Summary',
  panNumber: 'ABCDE1234F',
  contactNumber1: '+1234567890',
  contactNumber2: '+0987654321',
  farmerId: 'FARM1001',
  farmerName: 'John Doe',
  startDate: '2023-01-01',
  endDate: '2023-01-31',
  filteredTableData: [
    { date: '2023-01-01', quantity: 100, fatContent: 3.5, rate: 42 },
    { date: '2023-01-02', quantity: 105, fatContent: 3.7, rate: 43 },
    // Add more entries as needed
  ],
  AVGFat: 3.6,
  AVGSnf: 8.5,
  AVGRate: 42.5,
  TOTALQty: 3100,
  TOTALCredit: 131500,
  TOTALDebit: 5000,
  PrevDues: 2000,
};
// Create Document Component
function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header Section */}
          <View style={styles.section}>
            <Text style={styles.header}>{data.organizationName}</Text>
            <Text>{data.address}</Text>
            <Text>{data.billTitle}</Text>
          </View>

          {/* Farmer Details */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>Farmer Details:</Text>
            <Text>{`Farmer ID: ${data.farmerId}`}</Text>
            <Text>{`Farmer Name: ${data.farmerName}`}</Text>
          </View>

          {/* Contact Details */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>Contact Details:</Text>
            <Text>{`PAN Number: ${data.panNumber}`}</Text>
            <Text>{`Contact 1: ${data.contactNumber1}`}</Text>
            <Text>{`Contact 2: ${data.contactNumber2}`}</Text>
          </View>

          {/* Collection Data Table */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>Milk Collection Data:</Text>
            {data.filteredTableData.map((entry, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{entry.date}</Text>
                <Text style={styles.tableCell}>{entry.quantity}</Text>
                <Text style={styles.tableCell}>{entry.fatContent}</Text>
                <Text style={styles.tableCell}>{entry.rate}</Text>
              </View>
            ))}
          </View>

          {/* Summary */}
          <View style={styles.section}>
            <Text style={styles.subHeader}>Summary:</Text>
            <Text>{`Average Fat: ${data.AVGFat}`}</Text>
            <Text>{`Average SNF: ${data.AVGSnf}`}</Text>
            <Text>{`Average Rate: ${data.AVGRate}`}</Text>
            <Text>{`Total Quantity: ${data.TOTALQty}`}</Text>
            <Text>{`Total Credit: ${data.TOTALCredit}`}</Text>
            <Text>{`Total Debit: ${data.TOTALDebit}`}</Text>
            <Text>{`Previous Dues: ${data.PrevDues}`}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
