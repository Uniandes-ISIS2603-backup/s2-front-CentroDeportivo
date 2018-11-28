import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Zonacuerpo } from '../zonacuerpo';
import {ZonacuerpoService} from '../zonacuerpo.service';
import {ZonacuerpoDetail} from '../zonacuerpo-detail';

@Component({
  selector: 'app-zonacuerpo-edit',
  templateUrl: './zonacuerpo-edit.component.html',
  styleUrls: ['./zonacuerpo-edit.component.css']
})
export class ZonacuerpoEditComponent implements OnInit {

    constructor(private zonacuerpoService: ZonacuerpoService,
        private toastrService: ToastrService) { }
        
  @Input() zonacuerpo_id: number;
  @Output() cancel = new EventEmitter();
  @Output() update = new EventEmitter();
  zonacuerpo: ZonacuerpoDetail;
  
      getZonacuerpo(): void {
        this.zonacuerpoService.getZonacuerpoDetail(this.zonacuerpo_id)
            .subscribe(zonacuerpo => {
                this.zonacuerpo = zonacuerpo;
            });
    }
    editZonacuerpo(): void {
        this.zonacuerpoService.updateZonacuerpo(this.zonacuerpo)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The zonacuerpo's information was updated", "Zonacuerpo edition");
            });
    }
    cancelEdition(): void {
        this.cancel.emit();
    }
  ngOnInit() {
      this.zonacuerpo = new ZonacuerpoDetail();
        this.getZonacuerpo();
  }
    ngOnChanges() {
            this.ngOnInit();
        }
}
