import RNFS from 'react-native-fs';

const FileWrite = {
  writeFile: (data) => {
    const path = `${RNFS.DocumentDirectoryPath}/userdata.json`;

    return (
      RNFS.writeFile(path, JSON.stringify(data), 'utf8')
        .then((success) => {
        console.log(`FILE WRITTEN! ${success}`);
      })
        .catch((err) => {
        console.log(err.message);
      })
    );
  }
};

export default FileWrite;
