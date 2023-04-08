import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tile, TileGeneralSettings } from '../tile-dashboard/tile-dashboard.component';

@Component({
  selector: 'app-tile-settings',
  templateUrl: './tile-settings.component.html',
  styleUrls: ['./tile-settings.component.scss']
})
export class TileSettingsComponent implements OnInit, OnChanges {
  @Input() generalSettings!: TileGeneralSettings;
  @Input() tiles!: Tile[];

  availableLayouts = ["33/33/33", "25/25/50"];
  settingsForm: FormGroup = new FormGroup({});

  get tilesFormArray() {
    return <FormArray>this.settingsForm.get('tiles');
  }

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.settingsForm.valueChanges.subscribe(form => {
      console.log(form);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['settingsForm'] || changes['tiles']) && this.settingsForm && this.tiles) {
      this._mapInputsToForm();
    }
    console.log(this.settingsForm.value)
  }

  addTile(): void {
    console.log("Add new tile");
  }

  onSubmit(): void {
    console.log("Submit setting changes");
  }

  private _mapInputsToForm(): void {
    this.settingsForm = this.fb.group({
      displayLayout: [this.generalSettings.displayLayout, Validators.required],
      title: [this.generalSettings.title, Validators.required],
      subtitle: [this.generalSettings.subtitle],
      loadAllTiles: [this.generalSettings.loadAllTiles, Validators.required],
      visibleTiles: [this.generalSettings.visibleTiles],
      tiles: this.fb.array(this._mapTilesToForm(this.tiles))  
    })
  }

  private _mapTilesToForm(tiles: Tile[]): FormGroup[] {
    const tilesForm: FormGroup[] = [];

    tiles.forEach(tile => {
      const newTile = this.fb.group({
        text: [tile.text, Validators.required],
        url: [tile.url, Validators.required],
        color: [tile.color, Validators.required],
      })    
      tilesForm.push(newTile);      
    })

    return tilesForm;
  } 

}
