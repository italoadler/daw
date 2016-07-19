"use strict";

ui.gridZoom = 1;

ui.setGridZoom = function( zm, xpx, ypx ) {
	zm = Math.min( Math.max( 1, zm ), 8 );
	var zmMul = zm / ui.gridZoom;
	ui.gridZoom = zm;
	ui.gridEm *= zmMul;
	wisdom.css( ui.elGridEm, "fontSize", zm + "em" );
	ui.elGrid.dataset.sampleSize =
		ui.gridEm < 40 ? "small" :
		ui.gridEm < 80 ? "medium" : "big";
	ui.setGridScrollTop( -( ypx - ( ui.gridScrollTop + ypx ) * zmMul ) );
	ui.setTrackLinesLeft( xpx - ( -ui.trackLinesLeft + xpx ) * zmMul );
	ui.updateTimeline();
	ui.updateTrackLinesBg();
};
