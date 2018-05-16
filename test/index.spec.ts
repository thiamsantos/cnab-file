import {parse} from '../src/index';

describe('cnab-file', () => {
    it('should pass', () => {
        expect(parse('hey')).toEqual('hey');
    });
});
