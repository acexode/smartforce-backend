const fs = require('fs');
const path = require('path');

export function seeder() {
  const folderPath = path.join(__dirname, 'services/states');
  console.log('directory');
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return console.error('Unable to scan directory: ' + err);
    }

    const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

    jsonFiles.forEach(async file => {
      if (file) {
        const filePath = path.join(folderPath, file);
        fs.readFile(filePath, 'utf8', async (err, data) => {
          if (err) {
            return console.error('Unable to read file:', err);
          }
          try {
            const jsonArray = JSON.parse(data);
            // console.log('File:', file);
            // console.log('Content:', jsonArray);
            // Process each object in the JSON array
            for (const obj of jsonArray) {
              const filename = file.charAt(0).toUpperCase() + file.slice(1).toLowerCase().split('.')[0];
              // console.log('Processed state name:', filename);
              if (obj.police_outpost && obj.police_outpost.length > 0 && obj.police_outpost.toLowerCase() !== 'nil') {
                const item: any = {
                  name: obj.police_outpost,
                  station: obj.police_station,
                  divisionalHeadquarters: obj.division_headquarters,
                  areaCommand: obj.area_command || '',
                  state: filename,
                  // department: '',
                };
                const s = await this.theService.createPoliceOutpost(item);
                console.log(s);
              }
            }
          } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
          }
        });
      }
    });
  });
}
