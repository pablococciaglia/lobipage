import { Component } from '@angular/core';
import { YoutubeIcon } from '../social-network-buttons/youtube-icon/youtube-icon';
import { TiktokIcon } from '../social-network-buttons/tiktok-icon/tiktok-icon';
import { InstagramIcon } from '../social-network-buttons/instagram-icon/instagram-icon';
import { WhatsappIcon } from '../social-network-buttons/whatsapp-icon/whatsapp-icon';

@Component({
  selector: 'app-footer',
  imports: [YoutubeIcon, TiktokIcon, InstagramIcon, WhatsappIcon],
  templateUrl: './footer.html',
})
export class Footer {}
