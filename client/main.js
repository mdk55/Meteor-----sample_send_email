import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


//code subterfuge ++ fugue citing for transplant

Template.email.events({
    
    'submit #email-form' : function (e,p) {
        
        e.preventDefault();
        
        var toAddr=p.find('#inputEmail').value;
        var subj=p.find('#inputSubject').value;
        var body=p.find('#inputBody').value;
        
        Meteor.call('sendEmail', toAddr,subj,body);
    }
})


//