# JamBand
Band organization app

production notes:


{landing page}
	-band feed
	-notifications
	-upcoming dates
	-songs to work on

{setup page}(one time pop up for new members)
	-bandId(needed)
	-create member Id
	
	(move to user page, give "finish settign up acct" notifications)
	-name
	-email
	-phone number
	-instruments(symbols with text?)
	-password( adds to password array for band, add confirm password)
	
{update profile page}
	-change member id
	-change email
	-change phone number
	-change instruments	

{menu}
	-{band app that has 7 tabs}
	-clickable side slide menu bar

band chat
	-chat
	-like
	-dislike

band calendar(color coded)
	-add/remove gig(admin capability toggle)
	-add/remove practice(admin capability toggle)
	-add block day(all)
	-add notes(all)
	
band set list upcoming
	-gig name
	-date/time
	-location
	-set list

band to work on(admin adds and removes)

set list creator(admin confirms)
	-create/propose setlists
	-multiple sets
	-total calculated runtime

band master list(admin control, viewed by all)
	-band
	-song
	-time

band contact pages(admin)
	-member	
	-name
	-email
	-phone number
	-instruments

vote page(admin on/off toggle)
	-push to master list
	-push to set list upcoming
	-take gig

admin capabilities/page
	-confirm proposed setlist
	-add band member
	-add gig
	-add practice
	-add temp member(time limit)
	-remove band to work on
	-delete member
	-add songs to masterlist






*to do:
	-add navbar and footer to all pages with js
	-style login a href link to look like a button
	-add logout functionality
	-new member sign in must incorporate a "band code" to get access to band pages
	-create profile page to allow user to be in multiple "bands" and manage each
	-create "messages" section
	-style JamBand home link to look like button
	-consider ability to customize landing page 
	-add page to add credentials from new member login- name email-number-instruments
	-member credentials doubles as edit member credentials
	-widen input boxes for login and credentials
	-My Band Home button on Member credentials page should display the band name