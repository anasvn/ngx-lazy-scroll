# ngx-lazy-scroll
A simple lazy loading directive for large form elements. This will increase DOM rendering speed.

## Installation instructions

Install `ngx-lazy-scroll` from `npm`:
```bash
npm install ngx-lazy-scroll --save
```

Add to Modules:
```typescript
import { NgxLazyScrollModule } from 'ngx-lazy-scroll';

@NgModule({
  ...
  imports: [NgxLazyScrollModule,...]
  ...
})
```

## Usage

Add `lazyScroll` directive and use with `slice` pipe:
```html
<div style="max-height: 288px;overflow: scroll;" lazyScroll [limit]="limit" [heightAdjust]="'-100'" (stepEvent)="limit=$event">

<div *ngFor="let element of arrays | slice:0:limit; let i=index" >

  <form class="form-horizontal" >
    <h4>Form-{{i+1}}</h4>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Email:</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email" placeholder="Enter email">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Full name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" placeholder="Enter Name">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox"> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </div>
  </form>
  </div>
</div>
```
