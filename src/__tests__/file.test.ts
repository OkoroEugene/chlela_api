import GenerateFile from '../services/fileService';
import path from 'path';

test('node images works', () => {
    const fake_path = path.join(__dirname, '../../public/imgs/test1.jpeg');
    expect(GenerateFile(fake_path)).not.toBeNull();
})