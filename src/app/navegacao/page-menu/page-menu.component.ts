import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css']
})
export class PageMenuComponent implements OnInit {

  //#region  PAGE-TOP / Variáveis utilizadas no ajuste da página sempre que houver mudança na rota  

  private timerID: any = null;
  // If true, scrolling to top will be animated
  @Input() animate = true;
  // Animated scrolling speed, must be >=1
  @Input() speed = 50;
  // Acceleration coefficient, added to speed when using animated scroll, must be >=0
  @Input() acceleration = 2;

  //#endregion
  
  public toggled: string= "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

    //#region PAGE-TOP / Ajustar página no topo sempre que houver mudança na rota  

  /**
   * Scrolls window to top
   * @param event
   */
  abrir(event: any, nomeServico:any) {
    console.log(nomeServico);
    
    this.router.navigate([nomeServico]);
    if (!this.isBrowser()) {
      return;
    }

    event.preventDefault();
    if (this.animate) {
      this.animateScrollTop();
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   * Performs the animated scroll to top
   */
  animateScrollTop() {
    if (this.timerID !== null) {
      return;
    }

    let initialSpeed = this.speed;
    const that = this;
    this.timerID = setInterval(function () {
      window.scrollBy(0, -initialSpeed);
      initialSpeed = initialSpeed + that.acceleration;
      if (that.getCurrentScrollTop() === 0) {
        clearInterval(that.timerID);
        that.timerID = null;
      }
    }, 15);
  }

  /**
   * Get current Y scroll position
   * @returns {number}
   */
  getCurrentScrollTop() {
    if (typeof window.scrollY !== 'undefined' && window.scrollY >= 0) {
      return window.scrollY;
    }
    if (typeof window.pageYOffset !== 'undefined' && window.pageYOffset >= 0) {
      return window.pageYOffset;
    }
    if (typeof document.body.scrollTop !== 'undefined' && document.body.scrollTop >= 0) {
      return document.body.scrollTop;
    }
    if (typeof document.documentElement.scrollTop !== 'undefined' && document.documentElement.scrollTop >= 0) {
      return document.documentElement.scrollTop;
    }
    return 0;
  }

  /**
   * This check will prevent 'window' logic to be executed
   * while executing the server rendering
   * @returns {boolean}
   */
  isBrowser(): boolean {
    return typeof (window) !== 'undefined';
  }  

  //#endregion
}