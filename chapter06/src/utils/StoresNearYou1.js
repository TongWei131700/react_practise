import Map from './Map';
import StoreList from './StoreList';

function StoresNearYou1(props){
  return(
    <>
      <div id="map-container">
        <Map 
          latitude={props.latitude || "37.3230"} 
          longitude={props.longitude || "122.0322"} 
        />
      </div>
      <div id="store-list">
        <StoreList
          latitude={props.latitude || "37.3230"} 
          longitude={props.longitude || "122.0322"} 
        />
      </div>
      <!--
{`import Map from './Map';
import StoreList from './StoreList';

function StoresNearYou1(props){
  return(
    <>
      <div id="map-container">
        <Map 
          latitude={props.latitude || "37.3230"} 
          longitude={props.longitude || "122.0322"} 
        />
      </div>
      <div id="store-list">
        <StoreList
          latitude={props.latitude || "37.3230"} 
          longitude={props.longitude || "122.0322"} 
        />
      </div>
    </>
  )
}

export default StoresNearYou1;
`}
      -->
    </>
  )
}

export default StoresNearYou1;
