<?php 

function filterData(){
    $filters = '';

    if (isset($_POST['sex'])) {
        switch($_POST['sex']) {
            case 'woman':
                $filters .= " (sex = 'woman' OR sex = 'both') ";
                break;
            case 'man':
                $filters .= " (sex = 'man' OR sex = 'both') ";
                break;
            case 'both':
                $filters .= " sex = 'both' ";
                break;
        }
    }
    if (isset($_POST['sorted'])) {
        if (strlen($filters) > 0)
            $filters .= 'AND';

        switch($_POST['sorted']) {
            case 'Bestsellers': 
                $filters .= " sorted = 'Bestsellers' ";
                break;
            case 'onMidSeasonSale':
                $filters .= " sorted = 'onMidSeasonSale' ";
                break;
            case 'latest':
                $filters .= " sorted = 'latest' ";
                break;
        }
    }
    if (isset($_POST['type'])) {
        if (strlen($filters) > 0)
            $filters .= 'AND';

        switch($_POST['type']) {
            case 't-shirt':
                $filters .= " type = 't-shirt' ";
                break;
            case 'jumpsuit':
                $filters .= " type = 'jumpsuit' ";
                break;
            case 'hoodie':
                $filters .= " type = 'hoodie' ";
                break;
        }
    }

    if (isset($_POST['price'])){
        if (strlen($filters) > 0)
            $filters .=  ' AND PRICE < 20';
        else
            $filters .=  ' PRICE < 20';
    }
   
    return $filters;
}

?>