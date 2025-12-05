import { Component } from '@angular/core';
import { YoutubeIcon } from './youtube-icon/youtube-icon';
import { TiktokIcon } from './tiktok-icon/tiktok-icon';
import { InstagramIcon } from './instagram-icon/instagram-icon';
import { WhatsappIcon } from './whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'social-network-buttons',
  imports: [YoutubeIcon, TiktokIcon, InstagramIcon, WhatsappIcon],
  templateUrl: './social-network-buttons.html',
})
export class SocialNetworkButtons {}
