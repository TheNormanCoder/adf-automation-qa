// spec.js

describe('ADF Demo App', function() {

 it('test', function() {
  	browser.get('http://qaexercise.envalfresco.com/settings');
  	
  	var menu = element(by.id('adf-provider-selector'));
  	var until = protractor.ExpectedConditions;
	browser.wait(until.presenceOf(menu), 5000, 'Element menu taking too long to appear in the DOM');
  	menu.click();
  	
	var ecm = element(by.id('mat-option-1'));
	browser.wait(until.presenceOf(ecm), 5000, 'Element ecm taking too long to appear in the DOM');
	ecm.click()
 	
	var apply = element(by.id('host-button'));
	browser.wait(until.presenceOf(apply), 5000, 'Element apply taking too long to appear in the DOM');
	apply.click();
 	
	expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/login');

 	var textUsername='guest@example.com';
 	var textPassword='Password';
 	var username = element(by.id('username'));
 	var password = element(by.id('password'));
 	browser.wait(until.presenceOf(username), 5000, 'Element username taking too long to appear in the DOM');
 	username.click();
 	username.sendKeys(textUsername);
 	password.click();
 	password.sendKeys(textPassword);
	var login = element(by.id('login-button'));
	expect(login.isDisplayed()).toBe(true);
	login.click();

	expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/home');

	browser.get('http://qaexercise.envalfresco.com/files');

	expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/files');	

	var folder =element(by.css('button[data-automation-id*="create-new-folder"]'));
 	browser.wait(until.presenceOf(folder), 5000, 'Element folder taking too long to appear in the DOM');
 	folder.click();

 	var folderNameText='TheNormanCoder';
 	var folderName=element(by.id('adf-folder-name-input'));
 	browser.wait(until.presenceOf(folderName), 5000, 'Element folder name input taking too long to appear in the DOM');

 	folderName.sendKeys(folderNameText);
 	
 	var create = element(by.id('adf-folder-create-button'));
 	browser.wait(until.presenceOf(create), 5000, 'Element create button taking too long to appear in the DOM');
 	create.click();

 	var folderDivAutomationId='text_'+folderNameText;
 	var folderRow = element(by.css('div[data-automation-id*="'+folderDivAutomationId+'"]'));
 	browser.wait(until.presenceOf(folderRow), 5000, 'Element folder row taking too long to appear in the DOM');

 	browser.wait(until.presenceOf(folder), 5000, 'Element folder taking too long to appear in the DOM');
 	folder.click();
 	folderName.sendKeys(folderNameText);
 	create.click();

 	var dialog = element(by.id('cdk-describedby-message-container'));
 	expect(dialog.isDisplayed());

	var cancel = element(by.id('adf-folder-cancel-button'));
	browser.wait(until.presenceOf(cancel), 5000, 'Element cancel button taking too long to appear in the DOM');
	cancel.click();

	var threeDotsButton = element(by.id('action_menu_right_0'));
	browser.wait(until.presenceOf(threeDotsButton), 5000, 'Element three dots button taking too long to appear in the DOM');
	threeDotsButton.click();

	var deleteFolder = element(by.css('button[data-automation-id*="DOCUMENT_LIST.ACTIONS.FOLDER.DELETE"]'));
	browser.wait(until.presenceOf(deleteFolder), 5000, 'Element delete folder button taking too long to appear in the DOM');
	deleteFolder.click();

	browser.driver.sleep(1000);
  });

});
