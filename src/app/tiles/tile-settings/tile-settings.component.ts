import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Tile } from '../tile-dashboard/tile-dashboard.component';

@Component({
  selector: 'app-tile-settings',
  templateUrl: './tile-settings.component.html',
  styleUrls: ['./tile-settings.component.scss']
})
export class TileSettingsComponent {
  @Input() tiles: Tile[] = [];

  availableLayouts = ["33/33/33", "25/25/50"];

  settingsForm = this.fb.group({
    displayLayout: ['33/33/33', Validators.required],
    title: ['Extra Text', Validators.required],
    subtitle: ['Get Inspired'],
    loadAllTiles: [true, Validators.required],
    visibleTiles: [6],
    tiles: this.fb.array([
      // this.fb.group({
      //   order: [''],
      //   color: [''],
      //   text: [''],
      //   url: [''],
      // })
    ])

  
  })

  constructor(private fb: FormBuilder) {
    this.settingsForm.valueChanges.subscribe(form => {
      console.log(form);
    })
  }

  addTile(): void {
    console.log("Add new tile");
  }

  onSubmit(): void {
    console.log("Submit setting changes");
  }

}
