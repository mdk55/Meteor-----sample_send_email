import { Meteor } from 'meteor/meteor';

//code subterfuge ++ fugue citing for transplant

Meteor.startup(() => {
  
    process.env.MAIL_URL='smtp://postmaster%40sandboxe10bc4943b8e49a4b85101e9045c0181.mailgun.org:f8dabe8ab5f1b40866f606bcacf0f7f0@smtp.mailgun.org:587'
    
    Accounts.emailTemplates.form='no-reply-host-provider@yourdomain.com';
    
    Accounts.emailTemplates.sitename='Example Site Location';
    
    Accounts.emailTemplates.verifyEmail.subject = function (user) {
        return 'Confirm your Request for Entry ID';
        
    };
    
    Accounts.emailTemplates.verifyEmail.text = function (user, url) {
      
        return 'Click on the designated MailGun link to activate your Account with our support and insurance channel. This will confirm your email account address with us and be used for any future notifications regarding changes solicited to your accounts address and password. Please do not reply to this email address, it is not monitored. ' + url; 
        
    };
    
    Accounts.config({
            sendVerificationEmail:true
        })
});

Meteor.methods({
    
    'sendEmail' : function(to,subj,text) {
        
        //modified-enabler matte ddp-pacer 
        this.unblock();
    
        Email.send({
            
            to:to,
            from:'no-reply-host-provider@yourdomain.com',
            subject:subj,
            text:text
        });
    
    }
})

//