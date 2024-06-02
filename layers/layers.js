var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADM_JKT_1 = new ol.format.GeoJSON();
var features_ADM_JKT_1 = format_ADM_JKT_1.readFeatures(json_ADM_JKT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_JKT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_JKT_1.addFeatures(features_ADM_JKT_1);
var lyr_ADM_JKT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADM_JKT_1, 
                style: style_ADM_JKT_1,
                popuplayertitle: "ADM_JKT",
                interactive: true,
                title: '<img src="styles/legend/ADM_JKT_1.png" /> ADM_JKT'
            });
var format_DAS_JKT_2 = new ol.format.GeoJSON();
var features_DAS_JKT_2 = format_DAS_JKT_2.readFeatures(json_DAS_JKT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_JKT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_JKT_2.addFeatures(features_DAS_JKT_2);
var lyr_DAS_JKT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAS_JKT_2, 
                style: style_DAS_JKT_2,
                popuplayertitle: "DAS_JKT",
                interactive: true,
                title: '<img src="styles/legend/DAS_JKT_2.png" /> DAS_JKT'
            });
var format_Wisata_3 = new ol.format.GeoJSON();
var features_Wisata_3 = format_Wisata_3.readFeatures(json_Wisata_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wisata_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisata_3.addFeatures(features_Wisata_3);
var lyr_Wisata_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wisata_3, 
                style: style_Wisata_3,
                popuplayertitle: "Wisata",
                interactive: true,
                title: '<img src="styles/legend/Wisata_3.png" /> Wisata'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADM_JKT_1.setVisible(true);lyr_DAS_JKT_2.setVisible(true);lyr_Wisata_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADM_JKT_1,lyr_DAS_JKT_2,lyr_Wisata_3];
lyr_ADM_JKT_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DAS_JKT_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'GLOBALID': 'GLOBALID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Wisata_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'OBDWSA': 'OBDWSA', 'JDTWST': 'JDTWST', });
lyr_ADM_JKT_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DAS_JKT_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Wisata_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'OBDWSA': '', 'JDTWST': '', });
lyr_ADM_JKT_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DAS_JKT_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'GLOBALID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Wisata_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'OBDWSA': 'no label', 'JDTWST': 'no label', });
lyr_Wisata_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});