import { LightningElement } from 'lwc';
import companyLogo from '@salesforce/resourceUrl/carsoleimg';
import companyProducts from '@salesforce/resourceUrl/imagesforcarsole';

export default class CorosalimgstaticResource extends LightningElement {
    // Expose the static resource URL for use in the template
    companyLogoUrl = companyLogo;

    // Expose URL of assets included inside an archive file
    product1Url = companyProducts + '/imagesforcarsole/antra.png';
    product2Url = companyProducts + '/imagesforcarsole/insuraceimage.png';
}