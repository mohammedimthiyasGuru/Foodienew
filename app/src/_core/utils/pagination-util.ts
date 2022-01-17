import { Injectable } from "@angular/core";

@Injectable()
export class PaginationUtil {

    getPagesList(totalRecords: number, pageRecords: number, pageNo: number): number[] {
        let pagesList: number[] = [];
        let totalPages = this.getTotalPages(totalRecords, pageRecords);
        let index = 1;
        if (pageNo <= 3 || totalPages <= 5) { //Lenght 5 for display 5 page_number boxes in the pagination tab.
            index = 1
        } else if ((pageNo > 3) && (pageNo <= (totalPages - 2))) {
            index = pageNo - 2;
        } else {
            index = totalPages - 4;
        }
        for (; index <= totalPages; index++) {
            pagesList.push(index);
            if (pagesList.length >= 5)
                break;
        }
        return pagesList;
    }

    getTotalPages(totalRecords: number, pageRecords: number): number {
        let totalPages = 0;
        if (totalRecords > pageRecords) {
            let remains = totalRecords % pageRecords;
            if (remains == 0) {
                totalPages = (totalRecords / pageRecords);
            } else {
                totalPages = (totalRecords / pageRecords) + 1;
            }
        } else {
            totalPages = 1;
        }
        return Math.floor(totalPages);
    }
}