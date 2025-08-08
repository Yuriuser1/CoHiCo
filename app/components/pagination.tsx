
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
  searchParams?: Record<string, string | undefined>;
}

export function Pagination({ currentPage, totalPages, baseUrl, searchParams = {} }: PaginationProps) {
  const buildUrl = (page: number) => {
    const params = new URLSearchParams();
    
    // Добавляем все существующие параметры
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && key !== 'page') {
        params.set(key, value);
      }
    });
    
    // Добавляем номер страницы
    if (page > 1) {
      params.set('page', page.toString());
    }
    
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Показываем все страницы если их мало
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Показываем первую страницу
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Показываем страницы вокруг текущей
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Показываем последнюю страницу
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      {/* Previous page */}
      <Button
        variant="outline"
        size="sm"
        asChild={currentPage > 1}
        disabled={currentPage <= 1}
        className={cn(currentPage <= 1 && "cursor-not-allowed opacity-50")}
      >
        {currentPage > 1 ? (
          <Link href={buildUrl(currentPage - 1)} aria-label="Предыдущая страница">
            <ChevronLeft className="w-4 h-4" />
          </Link>
        ) : (
          <span>
            <ChevronLeft className="w-4 h-4" />
          </span>
        )}
      </Button>

      {/* Page numbers */}
      {pageNumbers.map((pageNum, index) => (
        <div key={index}>
          {pageNum === '...' ? (
            <span className="px-3 py-2 text-gray-500">...</span>
          ) : (
            <Button
              variant={currentPage === pageNum ? "default" : "outline"}
              size="sm"
              asChild={currentPage !== pageNum}
              className={cn(
                currentPage === pageNum && "bg-rose-600 hover:bg-rose-700"
              )}
            >
              {currentPage === pageNum ? (
                <span>{pageNum}</span>
              ) : (
                <Link href={buildUrl(pageNum as number)} aria-label={`Страница ${pageNum}`}>
                  {pageNum}
                </Link>
              )}
            </Button>
          )}
        </div>
      ))}

      {/* Next page */}
      <Button
        variant="outline"
        size="sm"
        asChild={currentPage < totalPages}
        disabled={currentPage >= totalPages}
        className={cn(currentPage >= totalPages && "cursor-not-allowed opacity-50")}
      >
        {currentPage < totalPages ? (
          <Link href={buildUrl(currentPage + 1)} aria-label="Следующая страница">
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <span>
            <ChevronRight className="w-4 h-4" />
          </span>
        )}
      </Button>
    </nav>
  );
}
