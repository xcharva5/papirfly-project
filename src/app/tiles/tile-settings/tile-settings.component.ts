import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tile, TileGeneralSettings } from '../tile-dashboard/tile-dashboard.component';
import { TilesService } from '../tiles.service';
declare var window: any;

@Component({
  selector: 'app-tile-settings',
  templateUrl: './tile-settings.component.html',
  styleUrls: ['./tile-settings.component.scss']
})
export class TileSettingsComponent implements OnInit, OnChanges {
  @Input() generalSettings!: TileGeneralSettings;
  @Input() tiles: Tile[] | null = null;
  @Output() submittedForm = new EventEmitter<{ generalSettings: TileGeneralSettings, tiles: Tile[]}>();

  availableLayouts = ["33/33/33", "25/25/50"];
  settingsForm: FormGroup = new FormGroup({});
  settingsModal: any;

  get tilesFormArray() {
    return <FormArray>this.settingsForm.get('tiles');
  }

  get visibleTilesFormControl() {
    return this.settingsForm.controls['visibleTiles'];
  }

  get loadAllTilesFormControl() {
    return this.settingsForm.controls['loadAllTiles'];
  }

  constructor(
    private fb: FormBuilder,
    private tilesService: TilesService
  ) { }

  ngOnInit(): void {
    this.settingsModal = new window.bootstrap.Modal(
      document.getElementById('settingsModal')
    );

    this.settingsForm.controls['loadAllTiles'].valueChanges.subscribe(loadAllTiles => {
      if (loadAllTiles) {
        this.visibleTilesFormControl.disable();
      } else {
        this.visibleTilesFormControl.enable();
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['settingsForm'] || changes['tiles']) && this.settingsForm && this.tiles) {
      this._mapInputsToForm();
    }
  }

  addTile(): void {
    const newTile = this.fb.group(
      {
        text: ['New tile', Validators.required],
        url: ['https://www.papirfly.com/', Validators.required],
        color: ['#33cccc', Validators.required],
      }
    );
    this.tilesFormArray.push(newTile);
  }

  removeTile(tileIndex: number): void {
    this.tilesFormArray.removeAt(tileIndex);
  }

  onSubmit(): void {
    const generalSettings: TileGeneralSettings = {
      displayLayout: this.settingsForm.controls['displayLayout'].value,
      title: this.settingsForm.controls['title'].value,
      subtitle: this.settingsForm.controls['subtitle'].value,
      loadAllTiles: this.settingsForm.controls['loadAllTiles'].value,
      visibleTiles: this.settingsForm.controls['visibleTiles'].value,
    }
    const tiles: Tile[] = this.settingsForm.controls['tiles'].value;
    
    this.tilesService.updateTileSettings({generalSettings, tiles});
    this.submittedForm.emit({ generalSettings, tiles});
  }

  openSettingsModal(): void {
    if (this.settingsForm && this.tiles) {
      this._mapInputsToForm();
    }
    this.settingsModal.show();
  }

  private _mapInputsToForm(): void {
    this.settingsForm = this.fb.group({
      displayLayout: [this.generalSettings.displayLayout, Validators.required],
      title: [this.generalSettings.title, Validators.required],
      subtitle: [this.generalSettings.subtitle],
      loadAllTiles: [this.generalSettings.loadAllTiles, Validators.required],
      visibleTiles: [this.generalSettings.visibleTiles],
      tiles: this.fb.array(this._mapTilesToForm(this.tiles ?? []))  
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
